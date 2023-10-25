import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

function Header() {
    const theme = useTheme();

    return (
        <Box 
            id="header" 
            height="100vh" 
            width="100vw" 
            display="flex"
            alignItems="flex-end" // Adjusted to position the content lower
            justifyContent="center"
            position="relative"
            sx={{
                backgroundImage: `url('/img/2301_mbe_marcel jans_050.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                color: theme.palette.common.white,
            }}
        >
            <Box 
                sx={{
                    textAlign: 'center',
                    backdropFilter: 'blur(6px)', // Increased blur effect
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Added a semi-transparent black background
                    padding: '2rem',
                    borderRadius: '1rem',
                    marginBottom: '10%', // Added some margin at the bottom to position the content higher
                }}
            >
                <Typography variant="h2" gutterBottom>
                    Marcel Jans
                </Typography>
                <Typography variant="h4" gutterBottom>
                    StemActeur en Voice-Over
                </Typography>
                <Button variant="contained" color="inherit" href="#reel">
                    Ontdek Meer
                </Button>
            </Box>
        </Box>
    );
}

export default Header;
