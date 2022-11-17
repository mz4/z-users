import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('It renders a button component', () => {
  const handleClick = jest.fn();
  const btn = (
    <Button actionButton={handleClick} type="secondary" text="submit" />
  );
  it('Create a snapshot of the button', () => {
    const component = renderer.create(btn);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Render button with submit text', () => {
    const { getByText, getByRole, container } = render(btn);
    const element = container.getElementsByClassName('secondary');
    expect(element.length).toBe(1);
    expect(getByText('submit')).toBeTruthy();
    expect(getByRole('button')).toBeEnabled();
  });
  it('Call a function onClick event', () => {
    render(btn);
    fireEvent.click(screen.getByText('submit'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
