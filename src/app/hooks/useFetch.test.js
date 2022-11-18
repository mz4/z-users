import { renderHook, act } from '@testing-library/react-hooks';
import { useFetch } from './useFetch';

describe('Test useSort custom hook', () => {
  const url = 'http://localhost:3001/users';
  it('Return a list sorted by first_name', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch(url));
    expect(result.current.data).toEqual([]);
    await act(async () => {
      await result.current.getData(url);
    });
    await waitForNextUpdate();
    expect(result.current.data).not.toEqual([]);
  });
});
