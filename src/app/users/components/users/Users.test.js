import { render, screen } from '@testing-library/react';
import Users from './Users';

const users = [
  { id: 1, first_name: 'John' },
  { id: 2, first_name: 'Jim' },
  { id: 3, first_name: 'Mark' },
  { id: 4, first_name: 'Frank' }
];
const showProfileDetails = jest.fn();

jest.mock('../user/User', () => () => {
  return <div>user mock</div>;
});

it('Render a list of users', () => {
  render(<Users users={users} showProfileDetails={showProfileDetails} />);
  const usersList = screen.getAllByText('user mock');
  expect(usersList.length).toBe(users.length);
});
