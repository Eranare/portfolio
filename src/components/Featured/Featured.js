//Featured.js
import React from 'react';
import './Featured.css';
import AudioSample from '../AudioSample';

function Featured({ samples }) {
  // Filter the samples array to include only the one with id 0
  const featuredSample = samples.find(sample => sample.id === 0);

  return (
    <div id="featured">
      <div className="featured_container" id="reel">
        {/* Use the id of the featured sample as the key */}
        {featuredSample && <AudioSample key={featuredSample.id} data={featuredSample} />}
      </div>
    </div>
  );
}

export default Featured;
