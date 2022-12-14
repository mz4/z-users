import reducer, { logout } from './authSlice';

test('should return the initial state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual({
    user: null,
    isAuthenticated: false,
    error: null
  });
});

test('should handle a todo being added to an empty list', () => {
  const previousState = [];

  expect(reducer(previousState, logout())).toEqual({
    user: null,
    isAuthenticated: false,
    error: null
  });
});
