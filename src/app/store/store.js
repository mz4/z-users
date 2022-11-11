import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/usersSlice';

export default configureStore({
  reducer: {
    users: usersReducer
  }
});
