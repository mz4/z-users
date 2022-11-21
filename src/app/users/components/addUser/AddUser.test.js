import {
  render,
  screen,
  fireEvent,
  act,
  waitFor
} from '@testing-library/react';
import AddUser from './AddUser';

const submit = jest.fn();

describe('test addUser form', () => {
  it('test add user', async () => {
    render(<AddUser submit={submit} />);
    const element = screen.getByTestId('submitForm');
    act(() => {
      fireEvent.click(element);
    });
    await waitFor(() => expect(submit).not.toHaveBeenCalled());
  });
});
