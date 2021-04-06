import { Stack } from "@chakra-ui/react";
import Link from "next/link";
import React, { FC } from "react";
import { SongListEntry } from "src/api/songs";

interface SongListProps {
  songs: SongListEntry[];
}

const SongList: FC<SongListProps> = ({ songs }) => {
  return (
    <Stack>
      {songs.map((song) => (
        <Link href={`song/${song.slug.current}`} key={song.title}>
          {song.title}
        </Link>
      ))}
    </Stack>
  );
};

export default SongList;
