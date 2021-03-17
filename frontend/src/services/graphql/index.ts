import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

const createApolloClient = new ApolloClient({
  ssrMode: typeof window === "undefined",
  uri: "https://9up46puq.api.sanity.io/v1/graphql/production/default",
  cache: new InMemoryCache(),
});

export const initializeApollo = (): ApolloClient<NormalizedCacheObject> => {
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") {
    return createApolloClient;
  }

  // Create the Apollo Client once in the client
  if (!apolloClient) {
    apolloClient = createApolloClient;
  }

  return apolloClient;
};
