import React from 'react';

import { gql, useQuery } from '@apollo/client';
import { Skeleton, Text } from '@chakra-ui/react';
import SongTemplate from '../templates/SongTemplate';

const GET_SONGS = gql`
  query GetSongs {
    allSong {
      title
      verses
      melody
      author
    }
  }
`;

const SongView = () => {
  const { loading, error, data } = useQuery(GET_SONGS);

  if (loading) return <Skeleton height="500px" />;
  if (error || !data) {
    return <Text>Lol du har feil</Text>;
  }

  return <SongTemplate songs={data.allSong} />;
};

export default SongView;
