import { Skeleton } from '@chakra-ui/react';
import SongDetail from '@components/organisms/SongDetail';
import Layout from '@components/templates/Layout';
import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { SwipeEventData, useSwipeable } from 'react-swipeable';
import { fetchSongDetail } from 'src/api/songs';
import { SongDetailType } from 'src/types';

interface SongPageProps {
  details: SongDetailType;
}

const SongPage: NextPage<SongPageProps> = ({ details }) => {
  const { push } = useRouter();

  const swipeRoute = (route: string, _eventData: SwipeEventData) => {
    if (route != null) push(`/song/${route}`);
  };

  const handlers = useSwipeable({
    onSwipedLeft: (eventData) => swipeRoute(details.info.next, eventData),
    onSwipedRight: (eventData) => swipeRoute(details.info.prev, eventData),
  });

  if (!details) {
    return <Skeleton startColor="pink.500" endColor="orange.500" height="20px" />;
  }

  return (
    <Layout>
      <SongDetail song={details} onSwipe={handlers} />
    </Layout>
  );
};

SongPage.getInitialProps = async (ctx) => {
  const { slug } = ctx.query;
  const data = await fetchSongDetail(slug as string);
  return {
    details: data,
  };
};

export default SongPage;
