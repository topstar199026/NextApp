
import * as apis from 'src/apis'

export const login = async (values: any) => {
	return await apis.login(values);	
}

export const register = async (values: any) => {
	return await apis.register(values);	
}

