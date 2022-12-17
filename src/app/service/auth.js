import { apiService } from './apiService';
import { LOGIN_ENDPOINT, POST } from '../constants/constants';

export const loginApi = async (data) => {
  return await apiService(LOGIN_ENDPOINT, {
    method: POST,
    body: JSON.stringify(data)
  });
};
