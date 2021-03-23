import SongDetail from "@components/organisms/SongDetail";
import Layout from "@components/templates/Layout";
import { useSlugContext } from "@services/context/SlugProvider";
import client from "@services/groq/client";
import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { SwipeEventData, useSwipeable } from "react-swipeable";
import { SongDetailType, SONG_DETAIL_QUERY } from "src/api/songs";

interface SongPageProps {
  details: SongDetailType;
}

const SongPage: NextPage<SongPageProps> = ({ details }) => {
  const { push } = useRouter();

  const swipeRoute = (route: string, _eventData: SwipeEventData) => {
    if (route != null) push(`/song/${route}`);
  };

  const handlers = useSwipeable({
    onSwipedLeft: (eventData) => swipeRoute(info.next, eventData),
    onSwipedRight: (eventData) => swipeRoute(info.prev, eventData),
  });

  return (
    <Layout>
      <SongDetail song={details} onSwipe={handlers} />
    </Layout>
  );
};

SongPage.getInitialProps = async (ctx) => {
  const { slug } = ctx.query;
  const data = await client.fetch<SongDetailType>(SONG_DETAIL_QUERY, { slug });
  return {
    details: data,
  };
};

export default SongPage;
