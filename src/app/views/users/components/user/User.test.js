import { render, screen, fireEvent } from '@testing-library/react';
import User from './User';

const user = {
  id: 1,
  first_name: 'Mark',
  last_name: 'Guy',
  avatar: 'https://reqres.in/img/faces/1-image.jpg'
};

const showProfileDetails = jest.fn();

it('Render a single user', () => {
  render(<User user={user} showProfileDetails={showProfileDetails} />);
  const userText = screen.getAllByText('Mark Guy');
  expect(userText.length).toBe(1);
});

it('Trigger show profile details', () => {
  render(<User user={user} showProfileDetails={showProfileDetails} />);
  const element = screen.getByTestId('userDetails');
  fireEvent.click(element);
  expect(showProfileDetails).toHaveBeenCalledTimes(1);
});
