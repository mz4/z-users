import React from 'react';
import renderer from 'react-test-renderer';
import { Text } from './Text';

describe('Render text component', () => {
  it('Create a snapshot', () => {
    const loader = <Text />;
    const component = renderer.create(loader);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
