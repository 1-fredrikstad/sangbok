import { Box, Heading, Stack, Text } from "@chakra-ui/layout";
import Header from "@components/molecules/Header";
import HeaderDetails from "@components/molecules/HeaderDetails";
import { SongDetailQuery_details } from "@graphqlTypes/SongDetailQuery";
import React, { FC, useEffect, useState } from "react";
import { SwipeableHandlers } from "react-swipeable";
import SingleVerse from "@components/molecules/SingleVerse";
import VerseChorusNumbering from "@components/molecules/VerseChorusNumbering";
import VerseNumbering from "@components/molecules/VerseNumbering";

interface SongDetailProps {
  song: SongDetailQuery_details;
  onSwipe: SwipeableHandlers;
}

enum SongTypes {
  SongChorusNumbering = "SongChorusNumbering",
  SongNumbering = "SongNumbering",
  SongSingleVerse = "SongSingleVerse",
}

const getSongType = (song: SongDetailQuery_details) => {
  if (song.verses.length === 1) {
    return SongTypes.SongSingleVerse;
  }
  if (song.chorus != null) {
    return SongTypes.SongChorusNumbering;
  } else {
    return SongTypes.SongNumbering;
  }
};

const SongDetail: FC<SongDetailProps> = ({ song, onSwipe }) => {
  const { author, title, melody } = song;

  const [songType, setSongType] = useState<SongTypes>(SongTypes.SongNumbering);

  useEffect(() => {
    setSongType(getSongType(song));
  }, [song]);

  return (
    <>
      <Header color="#D6F2E6">
        <Heading>
          <HeaderDetails title={title} author={author} melody={melody} />
        </Heading>
      </Header>

      <Box p="1rem 2.5rem" {...onSwipe}>
        {songType === SongTypes.SongChorusNumbering && (
          <VerseChorusNumbering song={song} />
        )}
        {songType === SongTypes.SongNumbering && <VerseNumbering song={song} />}
        {songType === SongTypes.SongSingleVerse && <SingleVerse song={song} />}
      </Box>
    </>
  );
};

export default SongDetail;
