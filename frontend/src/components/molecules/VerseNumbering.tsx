import React from 'react';
import { Stack, Text } from '@chakra-ui/react';
import { SongDetailType } from 'src/types';

interface Props {
  song: SongDetailType;
}

const VerseNumbering: React.FC<Props> = ({ song: { verses } }) => (
  <Stack spacing={6}>
    {verses.map((verse, i) => (
      <Text key={`verse${i}`} whiteSpace="pre-wrap">
        {`${i + 1}. ${verse}`}
      </Text>
    ))}
  </Stack>
);

export default VerseNumbering;
