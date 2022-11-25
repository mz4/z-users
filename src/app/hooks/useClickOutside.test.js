import { createRef } from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { fireEvent, render, screen } from '@testing-library/react';
import useClickOutside from './useClickOutside';

describe('Test useClickOutside custom hook', () => {
  it('Call handler', () => {
    // Arrange
    const handler = jest.fn();
    const ref = createRef();
    render(<div ref={ref}></div>);

    // Act
    renderHook(() => useClickOutside(ref, handler));
    fireEvent.mouseDown(document);

    // Assert
    expect(handler).toHaveBeenCalledTimes(1);
  });
  it('Do not call handler', () => {
    // Arrange
    const handler = jest.fn();
    const ref = createRef();
    render(<div ref={ref} data-testid="element-testid"></div>);

    // Act
    renderHook(() => useClickOutside(ref, handler));
    fireEvent.mouseDown(screen.getByTestId('element-testid'));

    // Assert
    expect(handler).not.toBeCalled();
  });
});
