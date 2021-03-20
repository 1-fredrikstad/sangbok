import { useQuery } from "@apollo/client";
import { Button } from "@chakra-ui/button";
import { Skeleton } from "@chakra-ui/skeleton";
import SongDetail from "@components/organisms/SongDetail";
import Layout from "@components/templates/Layout";
import { SongDetailQuery } from "@graphqlTypes/SongDetailQuery";
import { useSlugContext } from "@services/context/SlugProvider";
import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React from "react";
import { SONG_DETAIL_QUERY } from "src/api/songs";
const SongView: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { slugs } = useSlugContext();
  const info = slugs[slug as string];

  const { data, loading } = useQuery<SongDetailQuery>(SONG_DETAIL_QUERY, {
    variables: { songId: info._id },
  });
  console.log(info);

  return (
    <Layout>
      <Skeleton isLoaded={!loading} h="100%">
        {data && (
          <SongDetail song={data.details} next={info.next} prev={info.prev} />
        )}
      </Skeleton>
    </Layout>
  );
};

export default SongView;
