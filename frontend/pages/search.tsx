import React from 'react';
import { NextPage } from 'next';
import { Flex } from '@chakra-ui/react';
import SearchInput from '@components/atoms/SearchInput';
import Header from '@components/molecules/Header';
import SongView from '@components/pages/SongView';

const Search: NextPage = () => (
  <Flex flexDir="column" w="100%">
    <Header color="#FFD687">
      <SearchInput />
    </Header>
    <SongView />
  </Flex>
);

export default Search;
