import React from 'react';
import renderer from 'react-test-renderer';
import Personal from './Personal';

const user = {
  id: 1,
  first_name: 'Mark',
  last_name: 'Guy',
  avatar: 'https://reqres.in/img/faces/1-image.jpg'
};

describe('Render component', () => {
  it('Create a snapshot', () => {
    const personal = <Personal user={user} />;
    const component = renderer.create(personal);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
