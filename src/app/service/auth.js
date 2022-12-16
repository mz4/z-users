import { apiService } from './apiService';
import { LOGIN_ENDPOINT, POST } from '../constants/constants';

export const loginApi = (data) => {
  return apiService(POST, data, LOGIN_ENDPOINT);
};
