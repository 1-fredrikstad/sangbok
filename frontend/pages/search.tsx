import React from 'react';
import { NextPage } from 'next';
import { Flex } from '@chakra-ui/react';
import SearchInput from '@components/atoms/SearchInput';
import Header from '@components/molecules/Header';
import Song from './song';

const Search: NextPage = () => (
  <Flex flexDir="column" w="100%">
    <Header color="#FFD687">
      <SearchInput />
    </Header>
    <Song />
  </Flex>
);

export default Search;
