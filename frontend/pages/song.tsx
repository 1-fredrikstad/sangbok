import React from 'react';
import { NextPage } from 'next';
import { gql, useQuery } from '@apollo/client';
import { Skeleton, Text } from '@chakra-ui/react';
import SongTemplate from '@components/templates/SongTemplate';

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

const Song: NextPage = () => {
  const { loading, error, data } = useQuery(GET_SONGS);

  if (loading) return <Skeleton height="500px" />;
  if (error || !data) {
    return <Text>Lol du har feil</Text>;
  }

  return <SongTemplate songs={data.allSong} />;
};

export default Song;
