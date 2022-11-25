import renderer from 'react-test-renderer';
import { useForm } from 'react-hook-form';
import { render } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import { Input } from './Input';

describe('Render field component', () => {
  const { result } = renderHook(() =>
    useForm({
      testname: 'one'
    })
  );
  expect(result.current).toBeDefined();
  result.current.setValue('testname', 'one');
  result.current.getValues();
  const field = (
    <Input
      control={result.current.control}
      defaultValue={'twllllo'}
      placeholder={'testplaceholder'}
      name={'testname'}
      errors={[]}
      disabled={false}
    />
  );
  it('Create a snapshot', () => {
    const component = renderer.create(field);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Invoke onChange', () => {
    act(() => {
      result.current.setValue('testname', 'two');
    });
    const { getByPlaceholderText } = render(field);
    const input = getByPlaceholderText('testplaceholder', { name: 'testname' });
    expect(input.value).toBe('two');
    expect(input).toBeEnabled();
  });
});
