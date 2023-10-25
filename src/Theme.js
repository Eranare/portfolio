// theme.js
import { createTheme } from '@mui/material/styles';

const getTheme = (primaryColor = '#34495E', secondaryColor = '#E0E0E0', accentColor = '#3498DB') => {
  return createTheme({
    palette: {
      primary: {
        main: primaryColor,
      },
      secondary: {
        main: secondaryColor,
      },
      accent: {
        main: accentColor,
      },
      // ... other palette settings ...
    },
  });
};

export default getTheme;