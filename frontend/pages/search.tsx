import { useQuery } from "@apollo/client";
import { Box, Center, Skeleton } from "@chakra-ui/react";
import SearchInput from "@components/atoms/SearchInput";
import Header from "@components/molecules/Header";
import SongList from "@components/organisms/SongList";
import Layout from "@components/templates/Layout";
import { GetSongTitleQuery } from "@graphqlTypes/GetSongTitleQuery";
import { SlugInfo, useSlugContext } from "@services/context/SlugProvider";
import { NextPage } from "next";
import React from "react";
import { SONG_TITLE_QUERY } from "src/api/songs";

const Search: NextPage = () => {
  const { updateSlugMap } = useSlugContext();
  const { data, loading } = useQuery<GetSongTitleQuery>(SONG_TITLE_QUERY, {
    onCompleted: (data) => {
      for (let i = 0; i < data.songs.length; i++) {
        const info: SlugInfo = {
          prev: data.songs[i - 1]?.slug.current || null,
          next: data.songs[i + 1]?.slug.current || null,
          _id: data.songs[i]._id,
        };

        updateSlugMap(data.songs[i].slug.current, info);
      }
    },
  });
  return (
    <Layout>
      <Header color="#FFD687">
        <Center pt="2rem">
          <SearchInput />
        </Center>
      </Header>
      {loading ? (
        <Skeleton w="100%" h="100%" />
      ) : (
        <Box padding="5">
          <SongList songs={data.songs} />
        </Box>
      )}
    </Layout>
  );
};

export default Search;
