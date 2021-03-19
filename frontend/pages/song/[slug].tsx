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

  return (
    <Layout>
      <Skeleton isLoaded={!loading}>
        {data && <SongDetail song={data.details} />}
      </Skeleton>

      {info.prev && (
        <Link href={`/song/${info.prev}`}>
          <Button>PREV</Button>
        </Link>
      )}

      {info.next && (
        <Link href={`/song/${info.next}`}>
          <Button>NEXT</Button>
        </Link>
      )}
    </Layout>
  );
};

export default SongView;
