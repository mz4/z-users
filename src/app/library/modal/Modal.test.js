import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';
import { Modal } from './Modal';

describe('Render modal component', () => {
  const handleClick = jest.fn();
  const children = <div className={'modalBodyChildren'}>modal body</div>;
  const modal = (
    <Modal
      action={handleClick}
      children={<div className={children}>modal body</div>}
    />
  );
  it('Create a snapshot', () => {
    const component = renderer.create(modal);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Render modal component and children', () => {
    const { container } = render(modal);
    const elementModalContainer =
      container.getElementsByClassName('modalContainer');
    const elementModalBody = container.getElementsByClassName('modalBody');
    const elementModalBodyChildren =
      container.getElementsByClassName('modalBodyChildren');
    const elementHeader = container.getElementsByClassName('header');
    expect(elementModalContainer).toBeDefined();
    expect(elementModalBody).toBeDefined();
    expect(elementModalBodyChildren).toBeDefined();
    expect(elementHeader).toBeDefined();
  });
  it('Call a function on button click', () => {
    render(modal);
    fireEvent.click(screen.getByText('Close'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
