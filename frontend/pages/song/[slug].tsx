import { useQuery } from "@apollo/client";
import { Skeleton } from "@chakra-ui/skeleton";
import SongDetail from "@components/organisms/SongDetail";
import Layout from "@components/templates/Layout";
import { SongDetailQuery } from "@graphqlTypes/SongDetailQuery";
import { SlugContext } from "@services/context/SlugProvider";
import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import React, { FC, useContext, useEffect } from "react";
import { SONG_DETAIL_QUERY } from "src/api/songs";

const SongView: NextPage = () => {
  const router = useRouter();
  const { val } = useContext(SlugContext);
  useEffect(() => {
    console.log(val);
  }, [val]);

  const { data, loading } = useQuery<SongDetailQuery>(SONG_DETAIL_QUERY, {
    variables: { songId: "12" },
  });
  return (
    <Layout>
      <Skeleton isLoaded={true}>
        {/* <SongDetail song={data.details[0]} /> */}
        hei
      </Skeleton>
    </Layout>
  );
};

export default SongView;
