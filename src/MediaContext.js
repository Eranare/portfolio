// MediaContext.js
import React, { createContext, useContext, useState } from 'react';

const MediaContext = createContext();

export function useMediaContext() {
  return useContext(MediaContext);
}

export function MediaProvider({ children }) {
  const [currentlyPlayingId, setCurrentlyPlayingId] = useState(null);

  const playMedia = (mediaId) => {
    setCurrentlyPlayingId(mediaId);
  };

  const stopMedia = () => {
    setCurrentlyPlayingId(null);
  };

  return (
    <MediaContext.Provider
      value={{
        currentlyPlayingId,
        playMedia,
        stopMedia,
      }}
    >
      {children}
    </MediaContext.Provider>
  );
}
