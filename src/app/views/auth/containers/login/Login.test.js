import React from 'react';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../../../../utils/tests/tests';
import Login from './Login';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => {
  return {
    ...jest.requireActual('react-redux'),
    useDispatch: () => mockDispatch
  };
});

describe('Render login', () => {
  it('render login', async () => {
    renderWithProviders(<Login />);
    const submit = screen.getByTestId('submitForm');
    expect(submit).toBeInTheDocument();
    fireEvent.click(submit);
    expect(mockDispatch).not.toHaveBeenCalled();
    await waitFor(() => screen.getByTestId('submitForm'));
    expect(mockDispatch).toHaveBeenCalled();
  });
});
