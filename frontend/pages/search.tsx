import React from "react";
import { NextPage } from "next";
import { Box, Skeleton } from "@chakra-ui/react";
import SearchInput from "@components/atoms/SearchInput";
import Header from "@components/molecules/Header";
import Layout from "@components/templates/Layout";
import SongList from "@components/organisms/SongList";
import { SONG_TITLE_QUERY } from "src/api/songs";
import { useQuery } from "@apollo/client";
import { GetSongTitleQuery } from "@graphqlTypes/GetSongTitleQuery";
import { useSlugContext } from "@services/context/SlugProvider";

const Search: NextPage = () => {
  const { val, incrementVal } = useSlugContext();
  const { data, loading } = useQuery<GetSongTitleQuery>(SONG_TITLE_QUERY, {
    onCompleted: (data) => {
      data.songs.forEach((song) => {
        incrementVal();
      });
      console.log(val);
    },
  });
  return (
    <Layout>
      <button onClick={() => incrementVal()}>here</button>
      <Header color="#FFD687">
        <SearchInput />
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
