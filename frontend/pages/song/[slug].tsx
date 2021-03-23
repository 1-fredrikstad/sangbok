import { useQuery } from "@apollo/client";
import { Skeleton } from "@chakra-ui/skeleton";
import SongDetail from "@components/organisms/SongDetail";
import { SongDetailQuery } from "@graphqlTypes/SongDetailQuery";
import { useSlugContext } from "@services/context/SlugProvider";
import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { SwipeEventData, useSwipeable } from "react-swipeable";
import { SONG_DETAIL_QUERY } from "src/api/songs";

const SongView: NextPage = () => {
  const { query, push } = useRouter();
  const { slug } = query;
  const { slugs } = useSlugContext();
  const info = slugs[slug as string];

  const { data, loading } = useQuery<SongDetailQuery>(SONG_DETAIL_QUERY, {
    variables: { songId: info._id },
  });

  const swipeRoute = (route: string, _eventData: SwipeEventData) => {
    if (route != null) push(`/song/${route}`);
  };

  const handlers = useSwipeable({
    onSwipedLeft: (eventData) => swipeRoute(info.next, eventData),
    onSwipedRight: (eventData) => swipeRoute(info.prev, eventData),
  });

  return (
    <Skeleton isLoaded={!loading} h="100%">
      {data && <SongDetail song={data.details} onSwipe={handlers} />}
    </Skeleton>
  );
};

export default SongView;
