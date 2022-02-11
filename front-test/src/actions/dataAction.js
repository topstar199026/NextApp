
import {getTestDataApi} from '../apis/dataApi';

export const getTestDataAction = async (values) => {
	return await getTestDataApi(values);	
}

