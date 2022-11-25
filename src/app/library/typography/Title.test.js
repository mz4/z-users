import React from 'react';
import renderer from 'react-test-renderer';
import { Title } from './Title';

describe('Render title component', () => {
  it('Create a snapshot', () => {
    const title = <Title />;
    const component = renderer.create(title);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
