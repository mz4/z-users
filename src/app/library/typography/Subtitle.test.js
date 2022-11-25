import React from 'react';
import renderer from 'react-test-renderer';
import { Subtitle } from './Subtitle';

describe('Render subtitle component', () => {
  it('Create a snapshot', () => {
    const loader = <Subtitle />;
    const component = renderer.create(loader);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
