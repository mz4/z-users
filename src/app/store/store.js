import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../views/users/store/usersSlice';
import authReducer from '../views/auth/store/authSlice';

export default configureStore({
  reducer: {
    users: usersReducer,
    auth: authReducer
  }
});
