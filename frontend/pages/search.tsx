import { Box, Center } from "@chakra-ui/react";
import SearchInput from "@components/atoms/SearchInput";
import Header from "@components/molecules/Header";
import SongList from "@components/organisms/SongList";
import Layout from "@components/templates/Layout";
import client from "@services/groq/client";
import { NextPage } from "next";
import React from "react";
import { SongListEntry, SONG_LIST_QUERY } from "src/api/songs";
interface SearchProps {
  songs: SongListEntry[];
}

const Search: NextPage<SearchProps> = ({ songs }) => {
  return (
    <Layout>
      <Header color="#FFD687">
        <Center pt="2rem">
          <SearchInput />
        </Center>
      </Header>
      <Box padding="5">
        <SongList songs={songs} />
      </Box>
    </Layout>
  );
};

Search.getInitialProps = async (_ctx) => {
  const data = await client.fetch<SongListEntry[]>(SONG_LIST_QUERY);
  return {
    songs: data,
  };
};

export default Search;
