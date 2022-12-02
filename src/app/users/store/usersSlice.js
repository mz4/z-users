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

export const filterUsers = createAsyncThunk('users', async (filter) => {
  const ret = await fetch(
    `http://www.localhost:3001/users?favorite=${filter.favorite}`,
    {
      method: 'GET'
    }
  );
  const data = await ret.json();
  return data;
});

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
    builder.addCase(filterUsers.fulfilled, (state, action) => {
      state.users = action.payload;
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
