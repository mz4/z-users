import { GET_USERS, GET_USERS_SUCCESS, GET_USERS_FAILURE } from './actionTypes';

export const getUsers = () => {
  return {
    type: GET_USERS
  };
};

export const getUsersSuccess = (data) => {
  return {
    type: GET_USERS_SUCCESS,
    payload: {
      data
    }
  };
};

export const getUsersFailure = (data) => {
  return {
    type: GET_USERS_FAILURE,
    payload: {
      data
    }
  };
};
