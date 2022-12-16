import { apiService } from './apiService';
import { PROFILES_ENDPOINT, DELETE, POST } from '../constants/constants';

export const getUsersApi = () => {
  return apiService(PROFILES_ENDPOINT);
};

export const postUserApi = (data) => {
  return apiService(`${PROFILES_ENDPOINT}`, {
    method: POST,
    body: data
  });
};

export const deleteUserApi = (userId) => {
  return apiService(`${PROFILES_ENDPOINT}/${userId}`, {
    method: DELETE
  });
};
