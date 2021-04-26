import { Box, Text } from '@chakra-ui/layout';
import React from 'react';
import { SongDetailType } from 'src/types';

interface Props {
  song: SongDetailType;
}

const SingleVerse: React.FC<Props> = ({ song: { verses } }) => (
  <Box>
    <Text whiteSpace="pre-wrap">{verses[0]}</Text>
  </Box>
);

export default SingleVerse;
