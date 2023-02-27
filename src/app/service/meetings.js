import { apiService } from './apiService';
import { MEETINGS_ENDPOINT, DELETE, POST } from '../constants/constants';

export const getMeetingsApi = () => {
  return apiService(MEETINGS_ENDPOINT);
};

export const postMeetingsApi = (data) => {
  return apiService(`${MEETINGS_ENDPOINT}`, {
    method: POST,
    body: data,
  });
};

export const deleteMeetingsApi = (meetingsId) => {
  return apiService(`${MEETINGS_ENDPOINT}/${meetingsId}`, {
    method: DELETE,
  });
};
