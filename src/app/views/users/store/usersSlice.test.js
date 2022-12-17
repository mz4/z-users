import store from '../../../store/store';
import { getUsers } from './usersSlice';
//import { users } from '../../../data/mockData';

jest.mock('../../../service/users', () => {
  return {
    async getUsersApi() {
      return [
        { id: 1, first_name: 'test' },
        { id: 2, first_name: 'testb' }
      ];
    }
  };
});

describe('initial state', () => {
  it('should initially set users', () => {
    const state = store.getState().users;
    expect(state.users).toEqual([]);
  });

  it('should set users', async () => {
    await store.dispatch(getUsers());
    const state = store.getState().users;
    expect(state.users).toHaveLength(2);
    expect(state.users[0].first_name).toBe('test');
  });
});
