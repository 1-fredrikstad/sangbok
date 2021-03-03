import { Flex } from "@chakra-ui/react";
import React from "react";
import SearchInput from "../atoms/SearchInput";
import Header from "../molecules/Header";
import SongView from "./SongView";

const SearchView = () => {
  return (
    <Flex flexDir="column" w="100%">
      <Header color="#FFD687">
        <SearchInput />
      </Header>
      <SongView />
    </Flex>
  );
};

export default SearchView;
