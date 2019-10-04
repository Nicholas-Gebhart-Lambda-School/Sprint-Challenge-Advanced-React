import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage('dark');
  useEffect(() => {
    darkMode
      ? document.querySelector('body').classList.add('dark-mode')
      : document.querySelector('body').classList.remove('dark-mode');
  }, [darkMode]);

  const toggleMode = e => {
    // e.preventDefault();
    setDarkMode(!darkMode);
  };
  return [darkMode, toggleMode];
};
