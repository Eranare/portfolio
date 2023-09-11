import React from 'react';
import './Reel.css';
import AudioSample from '../AudioSample';

function Reel({ samples, setCurrentlyPlayingId }) {
  return (
    <div id="reel"> {/* Assuming this is where you want to render the audio samples */}
      <div className="reel-container">
        {samples.map(sample => (
          <AudioSample
            key={sample.id}
            data={sample}
            currentlyPlayingId={setCurrentlyPlayingId} // Pass the function as a prop
          />
        ))}
      </div>
    </div>
  );
}

export default Reel;
