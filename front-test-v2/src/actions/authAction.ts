
import * as apis from 'src/apis'

export const login = async (values: any) => {
	return await apis.login(values);	
}

export const register = async (values: any) => {
	return await apis.register(values);	
}

export const userList = async (values: any) => {
	return await apis.userList(values);	
}

export const messageList = async (values: any) => {
	return await apis.messageList(values);	
}


