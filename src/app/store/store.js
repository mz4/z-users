import { configureStore, combineReducers } from '@reduxjs/toolkit';
import usersReducer from '../views/users/store/usersSlice';
import meetingsReducer from '../views/meetings/store/meetingsSlice';
import authReducer from '../views/auth/store/authSlice';

const rootReducer = combineReducers({
  users: usersReducer,
  meetings: meetingsReducer,
  auth: authReducer,
});

export default configureStore({
  reducer: rootReducer,
});

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};
