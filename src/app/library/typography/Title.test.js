import React from 'react';
import renderer from 'react-test-renderer';
import { Title } from './Title';

describe('Render title component', () => {
  it('Create a snapshot', () => {
    const loader = <Title />;
    const component = renderer.create(loader);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
