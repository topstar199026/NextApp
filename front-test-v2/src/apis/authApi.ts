import axios from 'axios';
import { SOCKET_API_SERVER } from 'src/constants/constants';

axios.defaults.timeout = 20000;


export const login = async (values: any) => {
    const res = await axios.post(SOCKET_API_SERVER + 'user/login', {values});
    return res;
}

export const register = async (values: any) => {
    const res = await axios.post(SOCKET_API_SERVER + 'user/register', {values});
    return res;
}