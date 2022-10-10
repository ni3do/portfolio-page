import type { AppProps } from "next/app";
import "../styles/globals.css";

import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";
import "@fontsource/jost/600.css";
import "@fontsource/jost/700.css";
import "@fontsource/sen/400.css";
import "@fontsource/sen/700.css";

import { NextSeo } from "next-seo";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="Simon Wachter"
        titleTemplate="Simon Wachter"
        defaultTitle="Simon Wachter"
        description="Hey! I'm Simon, a Student and Developer!"
        openGraph={{
          url: "https://www.siwachter.com/",
          title: "Simon Wachter",
          description: "Hey! I'm Simon, a Student and Developer!",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "niedo, ni3do, siwachter, Simon Wachter, Developer, tech enthusiast",
          },
        ]}
      />
      <Head>
        <link
          rel="icon"
          type="image/png"
          href="/public/images/naruto_avatar.png"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
