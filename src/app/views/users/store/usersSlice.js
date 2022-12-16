import { getUsersApi, deleteUserApi } from '../../../service/users';
import {
  createSlice,
  createSelector,
  createAsyncThunk
} from '@reduxjs/toolkit';

const initialState = {
  users: [],
  loading: false,
  filters: {
    sorting: { asc: true },
    parameters: { favorite: false }
  }
};

export const getUsers = createAsyncThunk('getUsers', async () => {
  return await getUsersApi();
});

export const deleteUser = createAsyncThunk('deleteUser', async (userId) => {
  return await deleteUserApi(userId);
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    usersListSort(state) {
      state.filters.sorting.asc = !state.filters.sorting.asc;
    },
    filterUsers(state, action) {
      state.filters.parameters.favorite = action.payload.favorite;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(getUsers.pending, (state, action) => {
      state.loading = true;
      state.users = [];
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      const { users } = state;
      const index = users.findIndex(({ id }) => id === action.payload.userId);
      users.splice(index, 1);
    });
  }
});

export const { usersListSort, filterUsers } = usersSlice.actions;

export default usersSlice.reducer;

export const selectGetUsers = createSelector(
  (state) => state.users.users,
  (users) => {
    return users;
  }
);

export const selectLoading = createSelector(
  (state) => state.users.loading,
  (loading) => {
    return loading;
  }
);

export const getTotalUsers = createSelector(
  (state) => state.users.users,
  (users) => {
    return users.length;
  }
);

export const getUsersFilters = createSelector(
  (state) => state.users.filters,
  (filters) => {
    return filters;
  }
);
