import { useState, useEffect } from 'react';

const useDebounce = (value: string, delay: number) => {
  const [deboucedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearInterval(handler);
    };
  }, [value]);

  return deboucedValue;
};

export default useDebounce;
