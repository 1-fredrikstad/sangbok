import { Flex, HStack, Icon, Link, Stack, Text, useColorMode } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { FaItunesNote, FaSpotify } from 'react-icons/fa';
import { ImFileMusic } from 'react-icons/im';
import { SongListEntry } from 'src/types';

interface Props {
  songs: SongListEntry[];
}

const SongList: React.FC<Props> = ({ songs }) => {
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
            textDecoration="no"
            _active={{ textDecoration: 'none' }}
            _hover={{ textDecoration: 'none' }}
          >
            <Stack key={song.slug.current} maxWidth="95%">
              <Text isTruncated>
                {song.number ? song.number + '.' : ''} {song.title}
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
            <HStack>
              {song.audioUrl && <ImFileMusic size="21px" color={colorMode === 'light' ? '#191414' : 'white'} />}
              {song.spotifyuri && <FaSpotify size="21px" color={colorMode === 'light' ? '#191414' : 'white'} />}
            </HStack>
          </Link>
        </NextLink>
      ))}
    </Stack>
  );
};

export default SongList;
