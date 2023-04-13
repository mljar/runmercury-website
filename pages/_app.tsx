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
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-718XMSDDTR"
      ></Script>

      <Script strategy="afterInteractive">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
              
                    gtag('config', 'G-718XMSDDTR');
                `}
      </Script>
      <Consent />
      <Component {...pageProps} />
      
    </>
  );
}
