import * as React from 'react';
import { useState } from 'react';
import { Drawer, List, ListItem, ListItemButton, Typography, useMediaQuery, useTheme, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawerContent = (
    <Box display="flex" flexDirection="column" justifyContent="center" width="100%" height="100%" sx={{ overflow: 'hidden' }}>
      <List style={{ width: '100%' }}>
        <ListItem>
          <Box 
            component="img" 
            src='/img/2301_mbe_marcel jans_045.jpg' 
            alt="profile" 
            className="profile"
            sx={{
                position: 'absolute',
                zIndex: -1,
                height: '10vh',
                border: 'solid rgba(199, 180, 180, 0.562) 2px',
            }}
          />
        </ListItem>
        <ListItemButton component="a" href="#header">
          <Typography variant="h6">Home</Typography>
        </ListItemButton>
        <ListItemButton component="a" href="#reel">
          <Typography variant="h6">Demo Reel</Typography>
        </ListItemButton>
        <ListItemButton component="a" href="#contact">
          <Typography variant="h6">Contact</Typography>
        </ListItemButton>
      </List>
    </Box>
  );

  return (
    <>
      {isMobile ? (
        <>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
          <Drawer
            variant="temporary"
            open={drawerOpen}
            onClose={handleDrawerToggle}
            sx={{ width: '50%' }}
          >
            {drawerContent}
          </Drawer>
        </>
      ) : (
        <Drawer
          variant="permanent"
          sx={{ 
            width: '100% !important',  // Explicitly set width to 100% with !important flag
            flexShrink: 0, 
            overflow: 'hidden',
            padding: 0
          }}
        >
          {drawerContent}
        </Drawer>
      )}
    </>
  );
}

export default NavBar;
