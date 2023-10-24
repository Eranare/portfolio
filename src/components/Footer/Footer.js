import React from 'react';
import Button from '@mui/material/Button';
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles'; // Import useTheme

function Footer({ togglePrivacyPolicy, showPrivacyPolicy }) {
  const theme = useTheme(); // Use the theme

  return (
    <Box 
      component="footer" 
      sx={{
        background: theme.palette.primary.main, // Use secondary color from theme
        padding: '1rem',
        textAlign: 'center'
      }}
    >
      <p>footer here</p>
      <p>copyright mention</p>
      <Button variant="contained" color="secondary" onClick={togglePrivacyPolicy}>
        Privacyverklaring
      </Button>

      {showPrivacyPolicy && <PrivacyPolicy onClose={togglePrivacyPolicy} />}
    </Box>
  );
}

export default Footer;
