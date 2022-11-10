import { getUsers, getUsersSuccess, getUsersFailure } from './actions';
import { USERS_ENDPOINT } from '../../constants/constants';

export const getData = async (dispatch) => {
  dispatch(getUsers());
  try {
    await fetch(USERS_ENDPOINT)
      .then((res) => res.json())
      .then((res) => {
        return res;
      })
      .then((response) => {
        console.log('response: ', response);
        dispatch(getUsersSuccess(response));
      });
  } catch (e) {
    dispatch(getUsersFailure(e.message));
  }
};
