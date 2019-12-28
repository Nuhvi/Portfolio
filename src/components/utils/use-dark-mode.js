import storage from 'local-storage-fallback';
import useOriginalDarkMode from 'use-dark-mode';

const useDarkMode = () => {
  const darkMode = useOriginalDarkMode();

  if (!storage.darkModeToggled) {
    const localTime = new Date().getHours();
    const isDay = localTime < 16 && localTime > 8;
    if (isDay && darkMode.value) darkMode.toggle();
  }

  const toggle = () => {
    storage.setItem('darkModeToggled', true);
    darkMode.toggle();
  };

  return { value: darkMode.value, toggle };
};

export default useDarkMode;
