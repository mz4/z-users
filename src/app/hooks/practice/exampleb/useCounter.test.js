import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from './index';

describe('test useCounter', () => {
  it('should incremenent counter from custom initial value', () => {
    const { result } = renderHook(() => useCounter(9000));
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(9001);
    act(() => {
      result.current.reset();
    });
    expect(result.current.count).toBe(9000);
  });
  it('should incremenent async counter', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useCounter(1000));

    act(() => {
      result.current.incrementAsync();
    });

    await waitForNextUpdate();

    expect(result.current.count).toBe(1001);
  });
});
