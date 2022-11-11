import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: []
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    usersList(state, action) {
      state.users = action.payload;
    },
    usersListSort(state, action) {
      state.users = action.payload;
    }
  }
});

export const { usersList, usersListSort } = usersSlice.actions;
export default usersSlice.reducer;
