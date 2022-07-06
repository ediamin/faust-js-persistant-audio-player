import React, { useContext, useEffect, useState } from "react";
import { Howl } from "howler";
import AudioPlayerContext from "context/audio-player";
import styles from "scss/components/AudioPlayerSticky.module.scss";

const AudioPlayerSticky = (): JSX.Element => {
  const { src, isPlaying, setIsPlaying } = useContext(AudioPlayerContext);
  const [howlInstance, setHowlInstance] = useState(null);

  useEffect(() => {
    if (src && ! howlInstance) {
      // Create howl
      setHowlInstance(
        new Howl({
          src: [src],
          format: ["mp3"],
          html5: true,
          autoplay: true,
        })
      );
    }

    if (!isPlaying && howlInstance) {
      howlInstance.stop();
    }

    return () => {
      if (howlInstance) {
        howlInstance.off("load");
        howlInstance.off("end");
        howlInstance.unload();
        setHowlInstance(null);
      }
    };
  }, [src, howlInstance, isPlaying]);

  return (
    <>
      {src && (
        <div className={styles.wrap}>
          <strong>Audio Player</strong>
          <p>
            Player Status: {isPlaying ? "Playing" : "Stopped"} <br />
            {isPlaying ? (
              <button onClick={() => setIsPlaying(false)}>Stop</button>
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
