import React, { useContext } from "react";
import AudioPlayerContext from "context/audio-player";
import styles from "scss/components/AudioPlayer.module.scss";

const AudioPlayer = (): JSX.Element => {
  const { setSrc, isPlaying, setIsPlaying } = useContext(AudioPlayerContext);
  const audioSrc = "https://filesamples.com/samples/audio/mp3/sample2.mp3";

  const startPlaying = () => {
    setSrc(audioSrc);
    setIsPlaying(true);
  };

  return (
    <div className={styles.wrap}>
      <p><strong>Here is an audio player</strong></p>
      {isPlaying ? (
        <button onClick={() => setIsPlaying(false)}>Pause</button>
      ) : (
        <button onClick={startPlaying}>Play</button>
      )}
    </div>
  );
};

export default AudioPlayer;
