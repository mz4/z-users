import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import App from './App';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('test app', () => {
  let store;
  const setup = () => {
    const initialState = {
      users: {
        users: [],
        filters: {
          sorting: { asc: true },
          parameters: { favorite: false }
        }
      },
      auth: {
        user: null,
        isAuthenticated: false,
        error: null
      }
    };
    store = mockStore(initialState);
  };
  it('renders without crashing', () => {
    setup();
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
});
