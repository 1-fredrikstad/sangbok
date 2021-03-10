import React from "react";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@definitions/chakra/theme";
import "@styles/global.css";
import { initializeApollo } from "@services/graphql";
import { ApolloProvider } from "@apollo/client";
import { appWithTranslation } from "../i18n";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    const apolloClient = initializeApollo();
    return (
        <ChakraProvider theme={theme}>
            <ApolloProvider client={apolloClient}>
                <Component {...pageProps} />
            </ApolloProvider>
        </ChakraProvider>
    );
}

export default appWithTranslation(MyApp);
