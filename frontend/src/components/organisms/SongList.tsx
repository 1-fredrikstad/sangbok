import { Box, Button, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { FC } from "react";
import { FaItunesNote, FaSpotify } from "react-icons/fa";
import { SongListEntry } from "src/types";

interface SongListProps {
  songs: SongListEntry[];
}

const Card: FC = ({ children }) => {
  return (
    <Flex shadow="sm" justifyContent="space-between" padding="1">
      {children}
    </Flex>
  );
};

const SongList: FC<SongListProps> = ({ songs }) => {
  return (
    <Stack spacing={6}>
      {songs.map((song) => (
        <Card>
          <Stack>
            <Link href={`song/${song.slug.current}`} key={song.title}>
              <Button
                variant="link"
                mb={0}
                size="lg"
                fontSize="lg"
                justifyContent="flex-start"
                colorScheme="black"
              >
                {song.title}
              </Button>
            </Link>
            <FaItunesNote />
          </Stack>
          {Math.random() > 0.7 && (
            <Icon as={FaSpotify} color="green" height="32px" width="auto" />
          )}
        </Card>
      ))}
    </Stack>
  );
};

export default SongList;
