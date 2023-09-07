//AudioSample.js
import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import Slider from '@mui/material/Slider';
import VolumeUp from '@mui/icons-material/VolumeUp';
import VolumeOff from '@mui/icons-material/VolumeOff';

function AudioSample({ data }) {
    const [playing, setPlaying] = useState(false);
    const [volume, setVolume] = useState(0.8);
    const [played, setPlayed] = useState(0);
    const playerRef = useRef(null);

    const handleProgress = (state) => {
        setPlayed(state.played);
    };

    return (
      <div className="reel-player">
        <h4>{data.title}</h4>
        <ReactPlayer
          ref={playerRef}
          url={data.fileUrl}
          playing={playing}
          volume={volume}
          width="100%"
          height="50px"
          controls={false}
          onProgress={handleProgress}
        />
        <Button onClick={() => setPlaying(!playing)}>
          {playing ? <PauseIcon /> : <PlayArrowIcon />}
        </Button>
        <Slider
          value={played * 100}
          onChange={(e, newValue) => {
            const seekTo = newValue / 100;
            playerRef.current.seekTo(seekTo);
            setPlayed(seekTo);
          }}
        />
        <Button onClick={() => setVolume(volume > 0 ? 0 : 0.8)}>
          {volume > 0 ? <VolumeUp /> : <VolumeOff />}
        </Button>
        <Slider
          value={volume * 100}
          onChange={(e, newValue) => setVolume(newValue / 100)}
        />
        
        <p>{data.description}</p>
      </div>
    );
}

  export default AudioSample;