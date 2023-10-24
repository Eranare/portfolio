import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Featured from '../Featured/Featured';
import { useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

function Header(props) {
    const theme = useTheme();

    return (
        <Box 
            id="header" 
            height="100vh" 
            width="100vw" 
            display="flex"
            alignItems="flex-end"
            justifyContent="flex-end"
            position="relative"
            sx={{
                backgroundImage: `url('/img/2301_mbe_marcel jans_050.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <Box 
                className="headerContent"
                p={{ xs: 4, md: 8 }}
                width={{ xs: '100%', md: '50%' }}
                ml={{ xs: '0', md: '5%' }}
                mb={{ xs: '5%', md: '10%' }}
            >
<Paper 
    elevation={3}
    sx={{
        backgroundColor: theme.palette.primary.main,
        padding: '0rem',
        borderRadius: '1rem',
        maxWidth: {
            xs: 'calc(100% - 20px)', // Smaller spacing for mobile screens
            md: 'calc(100% - 350px)' // Larger spacing for medium and up screens
        },
        border: '2px solid',
        borderColor: theme.palette.secondary.main,
        boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.2)',
        textAlign: 'center' // This will center the text inside the Paper component
    }}
>
    <Typography variant="h2" gutterBottom color={theme.palette.secondary.main} align="center">
        Marcel Jans
    </Typography>
    <Typography variant="h4" gutterBottom color={theme.palette.secondary.main} align="center">
        StemActeur en Voice-Over
    </Typography>
</Paper>
                <Featured samples={props.samples} />
            </Box>
        </Box>
    );
}

export default Header;
