import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Views from './index';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('test app', () => {
  const renderWithStore = ({ children }) => {
    let store;

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

    return (
      <Provider store={store}>
        <Router>{children}</Router>
      </Provider>
    );
  };
  it('renders without crashing', () => {
    const { debug } = render(
      <renderWithStore>
        <Views />
      </renderWithStore>
    );
    console.log(debug());
  });
});
