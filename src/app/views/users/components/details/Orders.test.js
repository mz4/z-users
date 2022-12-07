import renderer from 'react-test-renderer';
import Orders from './Orders';

describe('Render component', () => {
  it('Create a snapshot', () => {
    const orders = <Orders />;
    const component = renderer.create(orders);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
