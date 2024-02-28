import type { ReactElement } from "react";
import type { AppProps } from "next/app";

import Script from "next/script";

import "../style.css";

import Consent from "./consent";

export default function Nextra({
  Component,
  pageProps,
}: AppProps): ReactElement {
  return (
    <>
      <Consent />
      <Component {...pageProps} />
    </>
  );
}
