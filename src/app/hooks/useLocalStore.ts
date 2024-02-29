import { useState, useCallback } from 'react';

const useLocalStore = (key: string, initialValue: any) => {
  const [value, setValue] = useState(() => {

    const storedValue = localStorage.getItem(key);
    if (storedValue) {
      return JSON.parse(storedValue);
    }
    return initialValue;
  });

  const setStoredValue = useCallback(
    (newValue: unknown) => {
      setValue(newValue);
      localStorage.setItem(key, JSON.stringify(newValue));
    },
    [key]
  );

  return [value, setStoredValue];
};

export { useLocalStore };