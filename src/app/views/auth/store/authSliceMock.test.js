import store from '../../../store/store';
import { login } from './authSlice';

jest.mock('../../../service/auth', () => {
  return {
    async loginApi() {
      return { user: 'MOCKEDVALUE' };
    }
  };
});

describe('login method 3', () => {
  it('login - mock global fetch', async () => {
    await store.dispatch(
      login({
        email: 'wrongusefrname@gmail.com',
        password: 'wrongpassword'
      })
    );
    expect(store.getState().auth.user).toEqual({ user: 'MOCKEDVALUE' });
  });
});
