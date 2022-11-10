import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './users/users';

export default configureStore({
  reducer: {
    users: usersReducer
  }
});
