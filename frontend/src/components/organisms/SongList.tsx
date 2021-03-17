import { useQuery } from "@apollo/client";
import { Link, Skeleton, Stack } from "@chakra-ui/react";
import { GetSongNames } from "@graphqlTypes/GetSongNames";
import React, { FC } from "react";
import { SongNameQuery } from "src/api/songs";

const SongList: FC = () => {
  const { data, loading } = useQuery<GetSongNames>(SongNameQuery);
  if (loading) return <Skeleton w="100%" h="100%" />;
  return (
    <Stack>
      {data.allSong.map((song) => (
        <Link href={`song/${song.numbering}`} key={song.title}>
          {song.title}
        </Link>
      ))}
    </Stack>
  );
};

export default SongList;
