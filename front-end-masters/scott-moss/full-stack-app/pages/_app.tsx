// import chakra provider, and extendtheme. we want to wrap our entire app in the chakra provider
// this chakra provider will give every component encapsulated in it access to the context.Context is state that can be accessed
// and shared. A provider just gives access to that state.

// Most component libs follow conventions created , so create a theme, extend the theme, and then make the theme available by using a provider
// so all the components in an application can access that theme. U can basically put ur on color pallette with chakra UI, so u can extend the theme
//

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const colors = {
    gray: {
      100: "#F5f5f5",
      200: "#EEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
  };

  const components = {
    Button: {
      variants: {
        link: {
          ":focus": {
            outline: "none",
            boxShadow: "none",
          },
        },
      },
    },
  };

  const theme = extendTheme({ colors, components });
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Component {...pageProps} />;
    </ChakraProvider>
  );
};

export default MyApp;
