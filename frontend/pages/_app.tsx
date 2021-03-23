import React from "react";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@definitions/chakra/theme";
import { initializeApollo } from "@services/graphql";
import { ApolloProvider } from "@apollo/client";
import { appWithTranslation } from "next-i18next";
import { SlugProvider } from "@services/context/SlugProvider";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const apolloClient = initializeApollo();

  return (
    <ChakraProvider theme={theme}>
      <ApolloProvider client={apolloClient}>
        <SlugProvider>
          <Component {...pageProps} />
        </SlugProvider>
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default appWithTranslation(MyApp);
