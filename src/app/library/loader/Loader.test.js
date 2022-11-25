import React from 'react';
import renderer from 'react-test-renderer';
import { Loader } from './Loader';

describe('Render loader component', () => {
  it('Create a snapshot', () => {
    const loader = <Loader />;
    const component = renderer.create(loader);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
