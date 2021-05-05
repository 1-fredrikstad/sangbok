import { Box, Flex, Heading, Image } from '@chakra-ui/react';
import NavigationArrows from '@components/atoms/NavigationArrows';
import Header from '@components/molecules/Header';
import HeaderDetails from '@components/molecules/HeaderDetails';
import SingleVerse from '@components/molecules/SingleVerse';
import VerseChorusNumbering from '@components/molecules/VerseChorusNumbering';
import VerseNumbering from '@components/molecules/VerseNumbering';
import React, { useEffect, useState } from 'react';
import { SwipeableHandlers } from 'react-swipeable';
import { SongDetailType } from 'src/types';

interface Props {
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

const SongDetail: React.FC<Props> = ({ song, onSwipe }) => {
  const [songType, setSongType] = useState<SongTypes>();

  useEffect(() => {
    setSongType(getSongType(song));
  }, [song]);

  return (
    // Fills the entire children component.
    <Flex direction="column" flex="1" {...onSwipe}>
      <Header>
        <Heading>
          <HeaderDetails {...song} />
        </Heading>
      </Header>

      <NavigationArrows song={song} />

      {/* Flex 1 takes up the remaining space left by Header. */}
      <Box p="1rem 1.5rem" flex="1">
        {songType === SongTypes.SongChorusNumbering && <VerseChorusNumbering song={song} />}
        {songType === SongTypes.SongNumbering && <VerseNumbering song={song} />}
        {songType === SongTypes.SongSingleVerse && <SingleVerse song={song} />}
      </Box>
      {song.songImage && (
        <Image
          src={song.songImage.url}
          alt={song.songImage.alt}
          maxW="300px"
          maxH="300px"
          alignSelf="center"
          p="0 1.5rem"
          paddingBottom="2rem"
        />
      )}
    </Flex>
  );
};

export default SongDetail;
