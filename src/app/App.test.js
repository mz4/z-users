import { render } from '@testing-library/react';
import App from './App';

jest.mock('./users/container/UsersManagement', () => () => {
  return <div>users management mock</div>;
});

it('renders without crashing', () => {
  render(<App />);
});
