import { fireEvent, screen, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../../../../utils/tests/tests';
import { useAppDispatch } from '../../../../utils/tests/redux-hooks';
import Login from './Login';

jest.mock('../../../../utils/tests/redux-hooks');

describe('Render login', () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    useAppDispatch.mockImplementation(() => dispatch);
  });
  test('render login', async () => {
    renderWithProviders(<Login />);
    const submit = screen.getByTestId('submitForm');
    expect(submit).toBeInTheDocument();
    expect(useAppDispatch).toHaveBeenCalled();
    expect(dispatch).not.toHaveBeenCalled();
    fireEvent.click(submit);
    await waitFor(() => screen.getByTestId('submitForm'));
    expect(dispatch).toHaveBeenCalledWith(expect.any(Function));
  });
});
