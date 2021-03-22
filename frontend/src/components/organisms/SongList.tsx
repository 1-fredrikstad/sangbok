import { Stack } from "@chakra-ui/react";
import { GetSongTitleQuery_songs } from "@graphqlTypes/GetSongTitleQuery";
import Link from "next/link";
import React, { FC } from "react";

interface SongListProps {
  songs: GetSongTitleQuery_songs[];
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
