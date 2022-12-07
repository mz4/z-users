import { users, filters } from '../../../../data/index';
import { render } from '@testing-library/react';
import { Provider, useSelector } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import UsersManagement from './UsersManagement';

const mockUseFetchLoaded = {
  getData: jest.fn(),
  data: users,
  loading: false
};

const mockUseSort = {
  sortByName: jest.fn()
};

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => jest.fn().mockResolvedValue([]),
  useSelector: jest.fn()
}));

jest.mock('../../../hooks/index', () => ({
  useFetch: () => mockUseFetchLoaded,
  useSort: () => mockUseSort
}));

const getStore = () => {
  const middlewares = [thunk];
  const initialState = {
    users: [],
    filters: {
      sorting: { asc: true },
      parameters: { favorite: false }
    }
  };
  const mockStore = configureStore(middlewares);
  return mockStore(initialState);
};

describe('Render component', () => {
  it.only('Data is loaded', () => {
    useSelector.mockReturnValueOnce(users).mockReturnValueOnce(filters);
    const store = getStore();
    const { getByText } = render(
      <Provider store={store}>
        <UsersManagement />
      </Provider>
    );
    expect(getByText(/Georgie/)).toBeDefined();
    expect(getByText(/Weaver/)).toBeDefined();
  });
});
