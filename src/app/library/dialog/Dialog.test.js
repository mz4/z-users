import renderer from 'react-test-renderer';
import { Dialog } from './Dialog';

describe('Render Avatar component', () => {
  const handleClickOutside = jest.fn();
  const dialog = (
    <Dialog
      header={<div>header</div>}
      body={<div>body</div>}
      footer={<div>footer</div>}
      handleClickOutside={handleClickOutside}
    />
  );
  it('Create a snapshot', () => {
    const component = renderer.create(dialog);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
