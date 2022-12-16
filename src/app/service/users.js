import { apiService } from './apiService';
import { PROFILES_ENDPOINT } from '../constants/constants';

export const getUsersApi = () => {
  return apiService(PROFILES_ENDPOINT);
};

export const deleteUserApi = (userId) => {
  return apiService(`${PROFILES_ENDPOINT}/${userId}`);
};
