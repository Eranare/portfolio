import './NavBar.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import ChatIcon from '@mui/icons-material/Chat';

function NavBar() {
  return (
      <AppBar position="sticky" className="navbar">
          <Toolbar>
              <img src="https://picsum.photos/id/237/200/300" className="logo" alt="logo" />
              <Tabs value={0} aria-label="navigation tabs">
                  <Tab label="Home" href="#header" />
                  <Tab label="Demo Reel" href="#reel" />
              </Tabs>
              <Button variant="contained" className="desktopMenuBtn" startIcon={<ChatIcon />} href="#contact">
                  Contact
              </Button>
          </Toolbar>
      </AppBar>
  );
}
export default NavBar;
