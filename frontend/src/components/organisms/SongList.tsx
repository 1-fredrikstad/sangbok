import { Flex, Icon, Link, Stack, Text, useColorMode } from '@chakra-ui/react';
import NextLink from 'next/link';
import React, { FC } from 'react';
import { FaItunesNote, FaSpotify } from 'react-icons/fa';
import { SongListEntry } from 'src/types';

interface SongListProps {
  songs: SongListEntry[];
}

const SongList: FC<SongListProps> = ({ songs }) => {
  const { colorMode } = useColorMode();

  return (
    <Stack spacing={6}>
      {songs.map((song) => (
        <NextLink href={`song/${song.slug.current}`} key={song.title}>
          <Link
            display="flex"
            shadow="sm"
            justifyContent="space-between"
            padding="1"
            _active={{ textDecoration: 'none' }}
          >
            <Stack key={song.slug.current} maxWidth="95%">
              <Text isTruncated>
                {song.order + 1}. {song.title}
              </Text>
              <Flex alignItems="center" color={colorMode === 'light' ? 'green.700' : 'green.200'}>
                {song.melody && (
                  <>
                    <Icon as={FaItunesNote} marginRight="2" />
                    {song.melody}
                  </>
                )}
              </Flex>
            </Stack>
            {/* TODO: Fiks størrelse på spotify ikonet og finn ut når den ikke vises*/}
            {song.spotifyuri && <FaSpotify size="21px" color={colorMode === 'light' ? '#191414' : 'white'} />}
          </Link>
        </NextLink>
      ))}
    </Stack>
  );
};

export default SongList;
