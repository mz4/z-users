import React from 'react';
import renderer from 'react-test-renderer';
import { Label } from './Label';

describe('Render label component', () => {
  it('Create a snapshot', () => {
    const loader = <Label />;
    const component = renderer.create(loader);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
