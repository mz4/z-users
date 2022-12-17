import { BrowserRouter as Router } from 'react-router-dom';
import { renderWithProviders } from '../utils/tests/tests';
import Views from './index';

describe('Test index', () => {
  it('Render login', () => {
    const { getByText } = renderWithProviders(
      <Router>
        <Views />
      </Router>,
      {
        preloadedState: {
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
        }
      }
    );
    expect(getByText(/Email/)).toBeDefined();
    expect(getByText(/Password/)).toBeDefined();
    expect(getByText(/Submit/)).toBeDefined();
  });
  it('Render users page', () => {
    const { getByText } = renderWithProviders(
      <Router>
        <Views />
      </Router>,
      {
        preloadedState: {
          users: {
            users: [],
            filters: {
              sorting: { asc: true },
              parameters: { favorite: false }
            }
          },
          auth: {
            user: null,
            isAuthenticated: true,
            error: null
          }
        }
      }
    );
    expect(getByText(/Menu/)).toBeDefined();
    expect(getByText(/Users List/)).toBeDefined();
    expect(getByText(/Favorites/)).toBeDefined();
  });
});
