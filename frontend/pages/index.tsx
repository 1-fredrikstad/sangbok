import { Box, Center, Flex, Stack, useColorMode } from '@chakra-ui/react';
import SearchInput from '../src/components/atoms/SearchInput';
import Header from '../src/components/molecules/Header';
import SongList from '../src/components/organisms/SongList';
import Layout from '../src/components/templates/Layout';
import { NextPage } from 'next';
import React, { useState } from 'react';
import { ChangeEvent } from 'react';
import { fetchSongDetail, fetchSongList } from '../src/api/songs';
import { SongListEntry, SongDetailType } from '../src/types';

interface SearchProps {
  songs: SongListEntry[];
}

export const filterSongs = (songs: SongListEntry[], searchString: String) => (
  songs.filter((song: SongDetailType) =>
    song.title.toLowerCase().includes(searchString.toLowerCase())
))

const Search: NextPage<SearchProps> = ({ songs }) => {
  const [searchString, setSearchString] = useState('');
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) =>
    setSearchString((event.target as HTMLInputElement).value);

  const filteredSongs = filterSongs(songs, searchString)

  const { colorMode } = useColorMode();

  return (
    <Layout>
      <Header>
        <Center pt="2rem">
          <Stack>
            <Flex alignItems="center" justifyContent="space-between">
              <img
                src={colorMode === 'light' ? 'images/logo-small.png' : 'images/logo-white-small.png'}
                alt="1. Fredrikstad speidergruppes logo"
                width="100px"
              />
              <h1 style={{ fontSize: '1.5em' }}>Sanger under liljen</h1>
            </Flex>
            <SearchInput value={searchString} handleChange={handleSearchChange} />
          </Stack>
        </Center>
      </Header>
      <Box padding="5">
        <SongList songs={filteredSongs} />
      </Box>
    </Layout>
  );
};

Search.getInitialProps = async (_ctx) => {
  const data = await fetchSongList();

  // Cache songs
  await Promise.all(data.map((song) => fetchSongDetail(song.slug.current)));

  return {
    songs: data,
  };
};

export default Search;
