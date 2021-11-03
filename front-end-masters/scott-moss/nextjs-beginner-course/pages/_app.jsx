import { jsx } from "theme-ui";
import React, { useEffect } from "react";
import { ThemeProvider } from "theme-ui";
import theme from "../theme";
import { Nav } from "../components/nav";
import Router from "next/router";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    Router.events.on("routeChangeStart", () => {
      console.log("hello routeChangeStart");
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Nav />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
