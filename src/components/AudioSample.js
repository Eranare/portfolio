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
    const [duration, setDuration] = useState(0);
    const playerRef = useRef(null);

    const handleProgress = (state) => {
        setPlayed(state.played);
    };

    const formatDuration = (seconds) => {
      const h = Math.floor(seconds / 3600);
      const m = Math.floor((seconds % 3600) / 60);
      const s = Math.floor(seconds % 60);
      return [h, m > 9 ? m : h ? '0' + m : m || '0', s > 9 ? s : '0' + s].filter(Boolean).join(':');
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
          onDuration={(d)=> setDuration(d)}
        />
        <Button onClick={() => setPlaying(!playing)}>
          {playing ? <PauseIcon /> : <PlayArrowIcon />}
        </Button>
        <div style={{ position: 'relative' }}>
          <Slider
            value={played * 100}
            onChange={(e, newValue) => {
              const seekTo = newValue / 100;
              playerRef.current.seekTo(seekTo);
              setPlayed(seekTo);
            }}
          />
          <div style={{ position: 'absolute', top: '20px', right: '5px' }}>
            {formatDuration(played * duration)} / {formatDuration(duration)}
          </div>
        </div>
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


  