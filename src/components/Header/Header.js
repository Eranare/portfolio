import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Featured from '../Featured/Featured';
import { useTheme } from '@mui/material/styles'; // Import useTheme

function Header(props) {
    const theme = useTheme(); // Use the theme

    return (
        <Box 
            id="header" 
            height="100vh" 
            width="100vw" 
            display="flex"
            alignItems="flex-end" // Adjust to position content towards the bottom
            justifyContent="flex-end" // Adjust to position content towards the right
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
                ml={{ xs: '0', md: '5%' }}  // Adjust left margin
                mb={{ xs: '5%', md: '10%' }}  // Add some bottom margin
            >
                <Box 
                    bgcolor={theme.palette.primary.main} // Primary color as background
                    p={2} // Padding for the box
                    borderRadius="1rem" // Rounded corners
                >
                    <Typography variant="h2" gutterBottom color={theme.palette.secondary.main}>
                        Marcel Jans
                    </Typography>
                    <Typography variant="h4" gutterBottom color={theme.palette.secondary.main}>
                        StemActeur en Voice-Over
                    </Typography>
                </Box>
                <Featured samples={props.samples} />
            </Box>
        </Box>
    );
}

export default Header;
