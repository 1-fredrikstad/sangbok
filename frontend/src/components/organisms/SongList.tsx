import { Button, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { FC } from "react";
import { SongListEntry } from "src/types";

interface SongListProps {
  songs: SongListEntry[];
}

const SongList: FC<SongListProps> = ({ songs }) => {
  return (
    <Stack spacing={6}>
      {songs.map((song) => (
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
      ))}
    </Stack>
  );
};

export default SongList;
