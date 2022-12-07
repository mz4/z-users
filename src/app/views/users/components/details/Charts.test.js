import React from 'react';
import renderer from 'react-test-renderer';
import Charts from './Charts';

describe('Render component', () => {
  it('Create a snapshot', () => {
    const charts = <Charts />;
    const component = renderer.create(charts);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
