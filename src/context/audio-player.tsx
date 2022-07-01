import React, { createContext, useState } from "react";

export type AudioPlayerContext = {
  src?: string;
  setSrc?: (src: string) => void;
  isPlaying?: boolean;
  setIsPlaying?: (isPlaying: boolean) => void;
};

const AudioPlayerContext = createContext<AudioPlayerContext>({});

export function AudioPlayerContextProvider({ children }): JSX.Element {
  const [src, setSrc] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  const value = {
    src,
    setSrc,
    isPlaying,
    setIsPlaying,
  };

  return (
    <AudioPlayerContext.Provider value={value}>
      {children}
    </AudioPlayerContext.Provider>
  );
}

export default AudioPlayerContext;
