import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: '9up46puq',
  dataset: 'private',
  apiVersion: '2021-03-25',
  useCdn: true, // `false` if you want to ensure fresh data
});

export default client;
