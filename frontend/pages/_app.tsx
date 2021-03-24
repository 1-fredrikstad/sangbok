import React from "react";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@definitions/chakra/theme";
import { appWithTranslation } from "next-i18next";
import { SlugProvider } from "@services/context/SlugProvider";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <SlugProvider>
        <Component {...pageProps} />
      </SlugProvider>
    </ChakraProvider>
  );
}

export default appWithTranslation(MyApp);
