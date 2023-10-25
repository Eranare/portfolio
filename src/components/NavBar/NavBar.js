import * as React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

function NavBar() {
  return (
    <AppBar >
      <Toolbar>
        <Box 
          component="img" 
          src='/img/2301_mbe_marcel jans_045.jpg' 
          alt="profile" 
          sx={{
              height: '50px',
              marginRight: '1rem',
              border: 'solid rgba(199, 180, 180, 0.562) 2px',
          }}
        />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Marcel Jans
        </Typography>
        <Button color="inherit" href="#header">Home</Button>        
        <Button color="inherit" href="#reel">Demo Reel</Button>
        <Button color="inherit" href="#prices">Pricing</Button>
        <Button color="inherit" href="#contact">Contact</Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
