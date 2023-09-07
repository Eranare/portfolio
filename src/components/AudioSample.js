// AudioSample.js

import Button from '@mui/material/Button';
function AudioSample({ data }) {
    return (
      <div>
        <Button id ="reelButton">Play</Button>
        <h4>{data.title}</h4>
        <p>{data.description}</p>
      </div>
    );
  }
  export default AudioSample;