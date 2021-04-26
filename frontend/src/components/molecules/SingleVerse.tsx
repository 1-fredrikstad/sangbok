import { Box, Text } from '@chakra-ui/layout';
import React from 'react';
import { SongDetailType } from 'src/types';

interface SingleVerseProps {
  song: SongDetailType;
}

const SingleVerse: React.FC<SingleVerseProps> = ({ song: { verses } }) => (
  <Box>
    <Text whiteSpace="pre-wrap">{verses[0]}</Text>
  </Box>
);

export default SingleVerse;
