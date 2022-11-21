import renderer from 'react-test-renderer';
import Details from './Details';

const user = {
  id: 1,
  first_name: 'Mark',
  last_name: 'Guy',
  avatar: 'https://reqres.in/img/faces/1-image.jpg'
};

describe('Render component', () => {
  it('Create a snapshot', () => {
    const details = <Details user={user} />;
    const component = renderer.create(details);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
