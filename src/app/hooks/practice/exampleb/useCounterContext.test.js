import { renderHook, act } from '@testing-library/react-hooks';
import { CounterStepProvider, useCounterContext } from './useCounterContext';

describe('test useCounterContext', () => {
  test('should use custom step when incrementing', () => {
    const wrapper = ({ children }) => (
      <CounterStepProvider step={2}>{children}</CounterStepProvider>
    );
    const { result } = renderHook(() => useCounterContext(18), { wrapper });

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(20);
  });

  test('should use custom step with rerender option', () => {
    const wrapper = ({ children, step }) => (
      <CounterStepProvider step={step}>{children}</CounterStepProvider>
    );
    const { result, rerender } = renderHook(() => useCounterContext(), {
      wrapper,
      initialProps: {
        step: 2
      }
    });

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(2);

    rerender({ step: 8 });

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(10);
  });
});
