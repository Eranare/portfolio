import React from 'react';
import './Reel.css';

// reel.js
import AudioSample from '../AudioSample';

function Reel({ samples }, props) {
  return (
    <div id={props.id}>
     
            <div className="reel-container" id="reel">
            
            {samples.map(sample => <AudioSample key={sample.id} data={sample} />)}
            
            </div>
    
    </div>
  );
}


export default Reel;