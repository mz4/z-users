import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../users/store/usersSlice';

export default configureStore({
  reducer: {
    users: usersReducer
  }
});
