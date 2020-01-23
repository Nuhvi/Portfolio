import storage from 'local-storage-fallback';
import _useDarkMode_ from 'use-dark-mode';

const useDarkMode = () => {
  const darkMode = _useDarkMode_();

  if (!storage.darkModeToggled) {
    const localTime = new Date().getHours();
    const isDay = localTime > 8 && localTime < 16;

    if (isDay && darkMode.value) darkMode.disable();
    if (!isDay && !darkMode.value) darkMode.enable();
  }

  const toggle = () => {
    storage.setItem('darkModeToggled', true);
    darkMode.toggle();
  };

  return { value: darkMode.value, toggle };
};

export default useDarkMode;
