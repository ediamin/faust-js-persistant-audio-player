import "faust.config";
import { FaustProvider } from "@faustjs/next";
import "normalize.css/normalize.css";
import React from "react";
import "scss/main.scss";
import { client } from "client";
import type { AppProps } from "next/app";
import { AudioPlayerContextProvider } from "../context/audio-player";
import AudioPlayerSticky from 'components/AudioPlayerSticky';

export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <FaustProvider client={client} pageProps={pageProps}>
        <AudioPlayerContextProvider>
          <Component {...pageProps} />
          <AudioPlayerSticky />
        </AudioPlayerContextProvider>
      </FaustProvider>
    </>
  );
}
