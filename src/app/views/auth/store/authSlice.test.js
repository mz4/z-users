import reducer, { logout, login } from './authSlice';

describe('actions', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual({
      user: null,
      isAuthenticated: false,
      error: null
    });
  });

  it('should handle a todo being added to an empty list', () => {
    const previousState = [];

    expect(reducer(previousState, logout())).toEqual({
      user: null,
      isAuthenticated: false,
      error: null
    });
  });
});

describe('thunks', () => {
  it('login fulfilled', async () => {
    const dispatch = jest.fn();
    const state = {
      user: null,
      isAuthenticated: false,
      error: null
    };
    const thunk = login({
      email: 'johndoeb@example.com',
      password: 'password123'
    });
    await thunk(dispatch, () => state, undefined);
    const { calls } = dispatch.mock;
    expect(calls).toHaveLength(2);
    expect(calls[0][0].type).toEqual('login/pending');
    expect(calls[1][0].type).toEqual('login/fulfilled');
  });
  it('login rejected', async () => {
    const dispatch = jest.fn();
    const state = {
      user: null,
      isAuthenticated: false,
      error: null
    };
    const thunk = login();
    await thunk(dispatch, () => state, undefined);
    const { calls } = dispatch.mock;
    expect(calls).toHaveLength(2);
    expect(calls[0][0].type).toEqual('login/pending');
    expect(calls[1][0].type).toEqual('login/rejected');
  });
});
