export const darkTheme = {
  colors: {
    primary: '#212121',
    secondary: '#f5f5f5',
    highlight: '#f50000',
    white: '#f5f5f5',
  },
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
  shadows: {
    1: '0 0 5px rgba(0, 0, 0, 0.25)',
  },
};

export const lightTheme = {
  ...darkTheme,
  colors: {
    ...darkTheme.colors,
    primary: darkTheme.colors.secondary,
    secondary: darkTheme.colors.primary,
    highlight: '#f50000',
  },
};
