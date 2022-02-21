import React, {
  createContext,
  useEffect,
  useReducer,
  useState
} from 'react'
import type { FC, ReactNode } from 'react'
import { io } from 'socket.io-client'
import { useRouter } from 'next/router'
import { useSnackbar } from 'notistack'

import { get as getData, save as saveData, format as formatData } from 'src/utils/data-utils'
import { SOCKET_SERVER } from 'src/constants/constants'
import { User } from 'src/types/user'

import * as actions from 'src/actions'
import moment from 'moment'

interface Key {
    token?: String
}
interface AuthState {
	token?: String | null
	newMessage?: any
    isInitial: boolean
    isAuthenticated: boolean
    user: User | null
}

interface AuthContextValue extends AuthState {
    method: 'JWT',
	newMessage: any,
    login: (email: string, password: string) => Promise<void>
    logout: () => void
    register: (email: string, name: string, password: string) => Promise<void>
	sendMessage: (message: string) => void;
}

interface AuthProviderProps {
    children: ReactNode
}

type InitialAction = {
    type: 'INITIALISE'
    payload: {
		isAuthenticated: boolean
		user: User | null
    }
}

type LoginAction = {
	type: 'LOGIN'
	payload: {
		user: User
	}
}

type LogoutAction = {
  	type: 'LOGOUT'
}

type RegisterAction = {
	type: 'REGISTER'
	payload: {
		user: User
	}
}

type Action =
	| InitialAction
	| LoginAction
	| LogoutAction
	| RegisterAction

const initialAuthState: AuthState = {
	token: getData('token'),
	isAuthenticated: false,
	isInitial: false,
	user: getData('user') ? JSON.parse(getData('user')) : null
}

const reducer = (state: AuthState, action: Action): AuthState => {
  switch (action.type) {
    case 'INITIALISE': {
      const { isAuthenticated, user } = action.payload
      return {
        ...state,
        isAuthenticated,
        isInitial: true,
        user
      }
    }
    case 'LOGIN': {
      const { user } = action.payload

      return {
        ...state,
        isAuthenticated: true,
        user
      }
    }
    case 'LOGOUT': {
      return {
        ...state,
        isAuthenticated: false,
        user: null
      }
    }
    case 'REGISTER': {
      const { user } = action.payload

      return {
        ...state,
        isAuthenticated: true,
        user
      }
    }
    default: {
      return { ...state }
    }
  }
}

const AuthContext = createContext<AuthContextValue>({
	...initialAuthState,
	method: 'JWT',
	newMessage: null,
	login: () => Promise.resolve(),
	logout: () => { },
	register: () => Promise.resolve(),
	sendMessage: () => Promise.resolve(),
})

var mySocket = io(SOCKET_SERVER, {
    autoConnect: false,
    reconnection: true,
    reconnectionAttempts: 5,
    reconnectionDelay: 1000,
    timeout: 2000,
})

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
	const router = useRouter()
	const { enqueueSnackbar } = useSnackbar()

	

	const [state, dispatch] = useReducer(reducer, initialAuthState)
	const [newMessage, setNewMessage] = useState(null)

	useEffect(() => {
		const token = getData('token')
		if(!token && (router.pathname !== 'login' && router.pathname !== '/register')){
			router.push('/login')
		}else if(token && router.pathname !== 'main'){
			router.push('/main')
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
	  if(state && state.user) socketConnect()
	}, [state])
	

	const socketConnect = async () => {
		mySocket.connect();
        
        mySocket.on('connect', () => {
			console.log('mySocket', mySocket.id)                    
        })

		mySocket.on('reconnect', () => {
        })        
    
        mySocket.on('disconnect', (reason) => {
            console.log('connection to server lost.', reason);           
        });

		mySocket.on('message:send',async (message: any) => {
			setNewMessage(message);

		})
	}

	const login = async (email: string, password: string) => {

		const response = await actions.login({
			email: email,
			password: password,
		})
		
		const data = response.data
		if(data.success){
			enqueueSnackbar(data.message, {
				variant: 'success'
			})
			await saveData('token', data.token)
			await saveData('user', data.user)

			socketConnect();

			dispatch({
				type: 'LOGIN',
				payload: {
					user: data.user,
				}
			});
			router.push('/main')
		}else{
			enqueueSnackbar(data.message, {
				variant: 'error'
			})
		}
	};

	const logout = async () => {
		dispatch({ type: 'LOGOUT' })
		formatData()
	};

	const register = async (email: string, password: string) => {

		const response = await actions.register({
			email: email,
			password: password,
		})
		const data = response.data
		if(data.success){
			enqueueSnackbar(data.message, {
				variant: 'success'
			})
			router.push('/login')
		}else{
			enqueueSnackbar(data.message, {
				variant: 'error'
			})
		}
	};

	const sendMessage = async (message: string) => {
		const data = {
			id: state.user,
			message: message,
			date: moment().format('HH:mm')
		}
		mySocket.emit("message:send", data)
	}

	return (
		<AuthContext.Provider
			value={{
				...state,
				method: 'JWT',
				newMessage,
				login,
				logout,
				register,
				sendMessage,
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthContext