import React from "react";
import { NextPage } from "next";
import { Box, Center } from "@chakra-ui/react";
import SearchInput from "@components/atoms/SearchInput";
import Header from "@components/molecules/Header";
import Layout from "@components/templates/Layout";
import SongList from "@components/organisms/SongList";

const Search: NextPage = () => (
  <Layout>
    <Header color="#FFD687">
      <Center pt="2rem">
        <SearchInput />
      </Center>
    </Header>
    <Box padding="5">
      <SongList />
    </Box>
  </Layout>
);

export default Search;
