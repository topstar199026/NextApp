import axios from 'axios';

axios.defaults.timeout = 20000;

const SOCKET_API_SERVER = "http://localhost:830/api/";

export const getTestDataApi = async (values) => {
    const res = await axios.post(SOCKET_API_SERVER + 'user/getData', {values});
    return res;
}