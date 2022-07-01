import React, { useContext } from "react";
import ReactPlayer from "react-player";
import AudioPlayerContext from "context/audio-player";
import styles from "scss/components/AudioPlayerSticky.module.scss";

const AudioPlayerSticky = (): JSX.Element => {
  const { src, isPlaying, setIsPlaying } = useContext(AudioPlayerContext);

  return (
    <>
      {src && (
        <div className={styles.wrap}>
          <ReactPlayer
            className={styles.player}
            url={src}
            playing={isPlaying}
            height="0"
            width="0"
          />
          <strong>Audio Player</strong>
          <p>
            Player Status: {isPlaying ? "Playing" : "Paused"}{" "} <br />
            {isPlaying ? (
              <button onClick={() => setIsPlaying(false)}>Pause</button>
            ) : (
              <button onClick={() => setIsPlaying(true)}>Play</button>
            )}
          </p>
        </div>
      )}
    </>
  );
};

export default AudioPlayerSticky;
