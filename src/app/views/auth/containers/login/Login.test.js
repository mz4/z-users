import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../../utils/tests/tests';
import Login from './Login';

describe('Render login', () => {
  it('render login', async () => {
    renderWithProviders(<Login />);
    const submit = screen.getByRole('button', { name: /Submit/i });
    expect(submit).toBeInTheDocument();
  });
});
