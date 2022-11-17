import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { Field } from './Field';

describe('Render field component', () => {
  it('Create a snapshot', () => {
    const field = <Field />;
    const component = renderer.create(field);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Render with props', () => {
    const field = (
      <Field>
        <div className={'testClass'} />
      </Field>
    );
    const { container } = render(field);
    const element = container.getElementsByClassName('testClass');
    expect(element).toBeDefined();
  });
});
