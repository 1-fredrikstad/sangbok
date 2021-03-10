import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://9up46puq.api.sanity.io/v1/graphql/production/default',
  cache: new InMemoryCache(),
});
