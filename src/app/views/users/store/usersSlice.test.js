import store from '../../../store/store';
import { usersList } from './usersSlice';
import { users } from '../../../data/mockData';

describe('initial state', () => {
  it('should initially set users', () => {
    const state = store.getState().users;
    expect(state.users).toEqual([]);
  });

  it('should set users', () => {
    store.dispatch(usersList(users));
    const state = store.getState().users;
    expect(state.users).toEqual(users);
  });
});
