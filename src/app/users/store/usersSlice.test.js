import store from '../../store/store';

describe('initial state', () => {
  it('should initially set users', () => {
    const state = store.getState().users;
    expect(state.users).toEqual([]);
  });
});
