import {
  createSlice,
  createSelector,
  createAsyncThunk
} from '@reduxjs/toolkit';

export const deleteUser = createAsyncThunk(
  'users/deleteUser',
  async (userId) => {
    await fetch(`http://www.localhost:3001/users/${userId}`, {
      method: 'DELETE'
    });
    return { userId };
  }
);

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
  },
  extraReducers: (builder) => {
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      const { users } = state;
      const index = users.findIndex(({ id }) => id === action.payload.userId);
      users.splice(index, 1);
    });
  }
});

export const { usersList, usersListSort } = usersSlice.actions;

export default usersSlice.reducer;

export const getUsers = createSelector(
  (state) => state.users.users,
  (users) => {
    return users;
  }
);

export const getTotalUsers = createSelector(
  (state) => state.users.users,
  (users) => {
    return users.length;
  }
);
