import { Box, Heading } from "@chakra-ui/layout";
import Header from "@components/molecules/Header";
import HeaderDetails from "@components/molecules/HeaderDetails";
import SingleVerse from "@components/molecules/SingleVerse";
import VerseChorusNumbering from "@components/molecules/VerseChorusNumbering";
import VerseNumbering from "@components/molecules/VerseNumbering";
import React, { FC, useEffect, useState } from "react";
import { SwipeableHandlers } from "react-swipeable";
import { SongDetailType } from "src/api/songs";

interface SongDetailProps {
  song: SongDetailType;
  onSwipe: SwipeableHandlers;
}

enum SongTypes {
  SongChorusNumbering = "SongChorusNumbering",
  SongNumbering = "SongNumbering",
  SongSingleVerse = "SongSingleVerse",
}

const getSongType = (song: SongDetailType) => {
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

  const [songType, setSongType] = useState<SongTypes>();

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
