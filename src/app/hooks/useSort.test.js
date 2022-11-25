import { renderHook } from '@testing-library/react-hooks';
import useSort from './useSort';

describe('Test useSort custom hook', () => {
  const data = [
    {
      id: 1,
      first_name: 'z'
    },
    {
      id: 2,
      first_name: 'm'
    },
    {
      id: 3,
      first_name: 'a'
    }
  ];
  it('Return a list sorted by first_name', () => {
    const { result } = renderHook(() => useSort());
    const res = result.current.sortByName(data);
    expect(res[0]['first_name']).toBe('a');
    expect(res[1]['first_name']).toBe('m');
    expect(res[2]['first_name']).toBe('z');
  });
});
