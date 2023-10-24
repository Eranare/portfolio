import React from 'react';
import Box from '@mui/material/Box';
import AudioSample from '../AudioSample';

function Featured({ samples }) {
  // Filter the samples array to include only the one with id 0
  const featuredSample = samples.find(sample => sample.id === 0);

  return (
    <Box 
      id="featured"
      component="div"
      sx={{
        '& .featured_container': {
          backgroundColor: '#f9f9f9',
          position: 'absolute',
          bottom: '1rem',
          left: '1rem',
          border: 'black solid 2px',
          borderRadius: '2rem',
          boxShadow: '0.25rem 0.25rem 0rem rgba(0, 0, 0, 0.644)',
          color: 'black',
        },
        '& #featuredButton': {
          display: 'block',
          width: '100%',
          padding: '10px 15px',
          backgroundColor: '#04d326',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          fontSize: '16px',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
          '&:hover': {
            backgroundColor: '#b3005a',
          },
        },
      }}
    >
      <Box className="featured_container" id="reel">
        {/* Use the id of the featured sample as the key */}
        {featuredSample && <AudioSample key={featuredSample.id} data={featuredSample} />}
      </Box>
    </Box>
  );
}

export default Featured;
