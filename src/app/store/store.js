import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../views/users/store/usersSlice';

export default configureStore({
  reducer: {
    users: usersReducer
  }
});
