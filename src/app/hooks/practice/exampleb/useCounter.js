import { useState, useCallback } from 'react';

export const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);
  const increment = useCallback(() => setCount((x) => x + 1), []);
  const reset = useCallback(() => setCount(initialValue), [initialValue]);
  const incrementAsync = useCallback(
    () => setTimeout(increment, 100),
    [increment]
  );
  return { count, increment, reset, incrementAsync };
};
