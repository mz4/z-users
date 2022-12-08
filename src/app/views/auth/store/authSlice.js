import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isAuthenticated: false,
  error: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSucess(state, action) {
      console.log('dispatched!!!');
      /*       const { user } = action.payload;
      state.user = user; */
      state.isAuthenticated = true;
      state.error = null;
    }
  }
});

export const { loginSucess } = authSlice.actions;

export default authSlice.reducer;

export const isAuthenticated = createSelector(
  (state) => state.isAuthenticated,
  (isAuthenticated) => {
    return isAuthenticated;
  }
);
