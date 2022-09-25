// import chakra provider, and extendtheme. we want to wrap our entire app in the chakra provider
// this chakra provider will give every component encapsulated in it access to the context.Context is state that can be accessed
// and shared. A provider just gives access to that state.

// Most component libs follow conventions created , so create a theme, extend the theme, and then make the theme available by using a provider
// so all the components in an application can access that theme.

import "../styles/globals.css";
import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
