import React from 'react';
import './Reel.css';
import AudioSample from '../AudioSample';

function Reel({ samples, setCurrentlyPlayingId }) {
  return (
    <div id="reel"> {/* Assuming this is where you want to render the audio samples */}
      <div className="reel-container">
      {samples
          .filter(sample => sample.id !== 0) // Filter out the sample with id: 0
          .map(sample => (
            <AudioSample
              key={sample.id}
              data={sample}
              currentlyPlayingId={setCurrentlyPlayingId}
            />
        ))}
      </div>
    </div>
  );
}

export default Reel;
