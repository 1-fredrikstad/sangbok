import { Box, Button, Flex, Icon, Stack, Text, VStack } from "@chakra-ui/react";
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
          <Stack maxWidth="95%">
            <Link href={`song/${song.slug.current}`} key={song.title}>
              <Button
                variant="link"
                mb={0}
                size="lg"
                fontSize="lg"
                fontWeight="normal"
                justifyContent="flex-start"
                colorScheme="black"
              >
                <Text isTruncated>{song.title}</Text>
              </Button>
            </Link>
            {/* <Flex alignItems="center" color="green.600">
              <Icon as={FaItunesNote} marginRight="2" />
              {song.melody || "Ingen melodi"}
            </Flex> */}
          </Stack>
        </Card>
      ))}
    </Stack>
  );
};

export default SongList;
