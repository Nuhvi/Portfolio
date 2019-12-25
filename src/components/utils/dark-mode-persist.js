import storage from 'local-storage-fallback';

export const isDarkMode = () => {
  if (storage.darkMode === undefined) storage.darkMode = true;
  return JSON.parse(storage.darkMode);
};

export const storeDarkMode = () => {
  storage.darkMode = !JSON.parse(storage.darkMode);
};
