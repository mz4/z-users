import {
  createAsyncThunk,
  createSelector,
  createSlice
} from '@reduxjs/toolkit';
import { LOGIN_ENDPOINT, POST } from '../../../constants/constants';

const initialState = {
  user: null,
  isAuthenticated: false,
  error: null
};

export const login = createAsyncThunk('login', async (data) => {
  const response = await fetch(`${LOGIN_ENDPOINT}`, {
    method: POST,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (response.ok) {
    return response.json();
  } else {
    return Promise.reject(response);
  }
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
      return { ...state, isAuthenticated: true, user: action.payload };
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
