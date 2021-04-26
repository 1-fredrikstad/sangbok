import React from 'react';
import { Stack, Text } from '@chakra-ui/react';
import { SongDetailType } from 'src/types';

interface VerseNumberingProps {
  song: SongDetailType;
}

const VerseNumbering: React.FC<VerseNumberingProps> = ({ song: { verses } }) => (
  <Stack spacing={6}>
    {verses.map((verse, i) => (
      <Text key={`verse${i}`} whiteSpace="pre-wrap">
        {`${i + 1}. ${verse}`}
      </Text>
    ))}
  </Stack>
);

export default VerseNumbering;
