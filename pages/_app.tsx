import "../styles/globals.css";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import { useEffect, useState } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Master Coin - WebSocket - Template 2022</title>
        <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/512/825/825540.png"
          sizes="192x192"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
