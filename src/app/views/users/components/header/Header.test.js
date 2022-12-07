import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';

describe('Render title component', () => {
  it('Create a snapshot', () => {
    const header = (
      <Header>
        <div>child component</div>
      </Header>
    );
    const component = renderer.create(header);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
