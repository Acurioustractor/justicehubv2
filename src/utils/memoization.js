import { useMemo, useCallback } from 'react';

export const memoizeFunction = (fn, deps) => {
  return useCallback(fn, deps);
};

export const memoizeValue = (value, deps) => {
  return useMemo(() => value, deps);
};

export const memoizeExpensiveCalculation = (calculation, inputs) => {
  return useMemo(() => {
    console.time('Expensive Calculation');
    const result = calculation(inputs);
    console.timeEnd('Expensive Calculation');
    return result;
  }, [inputs]);
}; 