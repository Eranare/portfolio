import React from 'react';
import { Box, useTheme } from '@mui/material';
import AudioSample from '../AudioSample';

function Reel({ samples, setCurrentlyPlayingId }) {
  const theme = useTheme();
  return (
    <Box id="reel" display="flex" justifyContent="center" bgcolor={theme.palette.secondary.main}>
      <Box 
        className="reel-container"
        p={2}
        maxWidth="800px"
        m="20px auto"
        display="flex"
        flexWrap="wrap"
        gap="4rem"
        sx={{
          '.reel-player': {
            bgcolor: '#f9f9f9',
            flex: '1 1 calc(33.33% - 4rem)',
            border: 'black solid 2px',
            borderRadius: '2rem',
            boxShadow: '0.25rem 0.25rem 0rem rgba(0, 0, 0, 0.644)',
            '@media (max-width: 768px)': {
              flex: '1 1 100%',
            },
          },
        }}
      >
        {samples
            .filter(sample => sample.id !== 0)
            .map(sample => (
              <AudioSample
                key={sample.id}
                data={sample}
                setCurrentlyPlayingId={setCurrentlyPlayingId} // Passing it down to AudioSample
                className="reel-player"
              />
          ))}
      </Box>
    </Box>
  );
}

export default Reel;
