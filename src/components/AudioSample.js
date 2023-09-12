//AudioSample.js
import React, { useRef, useState } from 'react';
import { useMediaContext } from '../MediaContext';
import ReactPlayer from 'react-player';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import Slider from '@mui/material/Slider';
import VolumeUp from '@mui/icons-material/VolumeUp';
import VolumeOff from '@mui/icons-material/VolumeOff';

function AudioSample({ data }) {
    const { currentlyPlayingId, playMedia, stopMedia } = useMediaContext();
    const isPlaying = currentlyPlayingId === data.id;
    const [isDragging, setIsDragging] = useState(false);
    const handlePlayButtonClick = () => {
      if (isPlaying) {
        stopMedia();
      } else {
        playMedia(data.id);
      }
    };

    const [volume, setVolume] = useState(0.8);
    const [played, setPlayed] = useState(0);
    const [duration, setDuration] = useState(0);
    const playerRef = useRef(null);


    const handleProgress = (state) => {
      if (!isDragging) { // Only update if the user is not dragging the slider
        setPlayed(state.played);
        setSliderValue(state.played * 100);
      }
    };

    const handleMediaEnd = () => {
      stopMedia(); // This will set the media to stopped and the button will reflect the change
    };
  const [sliderValue, setSliderValue] = useState(0); // New state for the slider's visual value
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
          playing={isPlaying} /* Use isPlaying from context */
          volume={volume}
          width="100%"
          height="50px"
          controls={false}
          onProgress={handleProgress}
          onDuration={(d) => setDuration(d)}
          onEnded={handleMediaEnd} // Add this line
        />
        <Button onClick={handlePlayButtonClick}>
          {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
        </Button>
        <div style={{ position: 'relative' }}>
        <Slider
            value={sliderValue}
            onChange={(e, newValue) => {
              setIsDragging(true);
              setSliderValue(newValue);
              const newPlayed = newValue / 100;
              setPlayed(newPlayed); // Update the played state here
            }}
            onChangeCommitted={(e, newValue) => {
              const seekTo = newValue / 100;
              playerRef.current.seekTo(seekTo);
              setIsDragging(false);
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


  