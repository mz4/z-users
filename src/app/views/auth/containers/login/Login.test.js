import { fireEvent, screen, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../../../../utils/tests/tests';
import Login from './Login';

describe('Render login', () => {
  test('render login', async () => {
    renderWithProviders(<Login />);
    const submit = screen.getByTestId('submitForm');
    expect(submit).toBeInTheDocument();
    fireEvent.click(submit);
    await waitFor(() => screen.getByTestId('submitForm'));
  });
});
