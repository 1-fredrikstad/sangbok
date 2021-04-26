import { Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { SongDetailType } from 'src/types';

interface VerseChorusNumberingProps {
  song: SongDetailType;
}

const VerseChorusNumbering: React.FC<VerseChorusNumberingProps> = ({ song: { verses, chorus } }) => (
  <Stack spacing={6}>
    {verses.map((verse, i) => (
      <React.Fragment key={`verse${i}`}>
        <Text whiteSpace="pre-wrap">{`${i + 1}. ${verse}`}</Text>

        {i === 0 && <Text>{`Ref: ${chorus}`}</Text>}
      </React.Fragment>
    ))}
  </Stack>
);

export default VerseChorusNumbering;
