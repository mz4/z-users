import {
  render,
  screen,
  fireEvent,
  act,
  waitFor,
} from '@testing-library/react';
import AddMeeting from './AddMeeting';

const submit = jest.fn();

describe('test AddMeeting form', () => {
  test('Submit is not called if form is not filled', async () => {
    render(<AddMeeting submit={submit} />);
    const element = screen.getByTestId('AddMeetingSubmitForm');
    act(() => {
      fireEvent.click(element);
    });
    await waitFor(() => expect(submit).not.toHaveBeenCalled());
  });
});

test('Submit is called if form is complete without errors', async () => {
  render(<AddMeeting submit={submit} />);
  const element = screen.getByTestId('AddMeetingSubmitForm');
  const email = screen.getByPlaceholderText('email');
  const firstName = screen.getByPlaceholderText('First Name');
  const lastName = screen.getByPlaceholderText('Last Name');
  const description = screen.getByPlaceholderText('Description');
  const favorite = screen.getByTestId('favorite');

  fireEvent.change(email, { target: { value: 'emailx@gmail.com' } });
  fireEvent.change(firstName, { target: { value: 'John' } });
  fireEvent.change(lastName, { target: { value: 'White' } });
  fireEvent.change(description, { target: { value: 'description test' } });
  fireEvent.change(favorite, { target: { value: true } });
  act(() => {
    fireEvent.click(element);
  });
  await waitFor(() => expect(submit).toHaveBeenCalled());
});
