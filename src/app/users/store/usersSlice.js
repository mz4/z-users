import { createSlice,  createSelector} from '@reduxjs/toolkit';

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

export const getUsers = createSelector(
  (state) => state.users.users,
  (users) => {
    return users;
  }
)

export const getTotalUsers = createSelector(
  (state) => state.users.users,
  (users) => {
    return users.length;
  }
)