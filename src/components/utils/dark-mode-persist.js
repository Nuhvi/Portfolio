import storage from 'local-storage-fallback';

export const isDarkMode = () => {
  return JSON.parse(storage.darkMode);
};

export const storeDarkMode = () => {
  storage.darkMode = !JSON.parse(storage.darkMode);
};
