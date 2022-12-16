import {
  createAsyncThunk,
  createSelector,
  createSlice
} from '@reduxjs/toolkit';
import { loginApi } from '../../../service/auth';

const initialState = {
  user: null,
  isAuthenticated: false,
  error: null
};

export const login = createAsyncThunk('login', async (data) => {
  const response = await loginApi(data);
  return response;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      return { ...state, ...initialState };
    }
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    });
  }
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;

export const isAuthenticated = createSelector(
  (state) => state.auth.isAuthenticated,
  (isAuthenticated) => {
    return isAuthenticated;
  }
);
