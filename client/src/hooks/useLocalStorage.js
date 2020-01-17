import { useState } from 'react';

export const useLocalStorage = (key, initial) => {
  if (typeof key !== 'string') {
    throw new Error('key must be a string');
  }
  const [storedValue, setStoredValue] = useState(() => {
    const local = localStorage.getItem(key);
    return local ? JSON.parse(local) : initial;
  });

  const setValue = value => {
    localStorage.setItem(key, JSON.stringify(value));
    setStoredValue(value);
  };
  return [storedValue, setValue];
};
