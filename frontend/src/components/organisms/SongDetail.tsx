import { Box, Flex, Heading } from '@chakra-ui/layout';
import NavigationArrows from '@components/atoms/NavigationArrows';
import Header from '@components/molecules/Header';
import HeaderDetails from '@components/molecules/HeaderDetails';
import SingleVerse from '@components/molecules/SingleVerse';
import VerseChorusNumbering from '@components/molecules/VerseChorusNumbering';
import VerseNumbering from '@components/molecules/VerseNumbering';
import React, { FC, useEffect, useState } from 'react';
import { SwipeableHandlers } from 'react-swipeable';
import { SongDetailType } from 'src/types';

interface SongDetailProps {
  song: SongDetailType;
  onSwipe: SwipeableHandlers;
}

enum SongTypes {
  SongChorusNumbering = 'SongChorusNumbering',
  SongNumbering = 'SongNumbering',
  SongSingleVerse = 'SongSingleVerse',
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
  const [songType, setSongType] = useState<SongTypes>();

  useEffect(() => {
    setSongType(getSongType(song));
  }, [song]);

  return (
    // Fills the entire children component.
    <Flex direction="column" flex="1">
      <Header>
        <Heading>
          <HeaderDetails {...song} />
        </Heading>
      </Header>

      <NavigationArrows song={song} />

      {/* Flex 1 takes up the remaining space left by Header. */}
      <Box p="1rem 2.5rem" {...onSwipe} flex="1">
        {songType === SongTypes.SongChorusNumbering && <VerseChorusNumbering song={song} />}
        {songType === SongTypes.SongNumbering && <VerseNumbering song={song} />}
        {songType === SongTypes.SongSingleVerse && <SingleVerse song={song} />}
      </Box>
    </Flex>
  );
};

export default SongDetail;
