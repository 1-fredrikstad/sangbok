import { useQuery } from "@apollo/client";
import { Link, Skeleton, Stack } from "@chakra-ui/react";
import { GetSongTitleQuery } from "@graphqlTypes/GetSongTitleQuery";
import React, { FC } from "react";
import { SONG_TITLE_QUERY } from "src/api/songs";

const SongList: FC = () => {
  const { data, loading } = useQuery<GetSongTitleQuery>(SONG_TITLE_QUERY);
  if (loading) return <Skeleton w="100%" h="100%" />;
  return (
    <Stack>
      {data.songs.map((song) => (
        <Link href={`song/${song.slug.current}`} key={song.title}>
          {song.title}
        </Link>
      ))}
    </Stack>
  );
};

export default SongList;
