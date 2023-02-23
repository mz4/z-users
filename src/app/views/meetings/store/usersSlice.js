import {
  getUsersApi,
  postUserApi,
  deleteUserApi,
} from '../../../service/users';
import {
  createSlice,
  createSelector,
  createAsyncThunk,
} from '@reduxjs/toolkit';

const initialState = {
  users: [],
  loading: false,
  filters: {
    sorting: { asc: true },
    parameters: { favorite: false },
  },
};

export const getUsers = createAsyncThunk('getUsers', () => {
  return getUsersApi();
});

export const searchUsers = createAsyncThunk(
  'searchUsers',
  (debouncedSearch) => {
    console.log('debouncedSearch: ', debouncedSearch);
    return getUsersApi();
  }
);

export const postUser = createAsyncThunk('postUser', (data) => {
  postUserApi(data);
  return data;
});

export const deleteUser = createAsyncThunk('deleteUser', (userId) => {
  deleteUserApi(userId);
  return userId;
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
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchUsers.fulfilled, (state, action) => {
      const search = action.meta.arg;
      const users = action.payload;
      return {
        ...state,
        loading: false,
        users: users.filter((user) => {
          const lowerCaseName = user.first_name.toLowerCase();
          return lowerCaseName.includes(search.toLowerCase());
        }),
      };
    });
    builder.addCase(searchUsers.pending, (state, action) => {
      return {
        ...state,
        loading: true,
        users: [],
      };
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    });
    builder.addCase(getUsers.pending, (state, action) => {
      return {
        ...state,
        loading: true,
        users: [],
      };
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    });
    builder.addCase(postUser.fulfilled, (state, action) => {
      return {
        ...state,
        users: [...state.users, JSON.parse(action.payload)],
      };
    });
  },
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
