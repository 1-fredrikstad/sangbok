import React, { FC } from "react";
import { Stack, Text } from "@chakra-ui/react";
import { SongDetailType } from "src/api/songs";

interface VerseNumberingProps {
  song: SongDetailType;
}

const VerseNumbering: FC<VerseNumberingProps> = ({ song: { verses } }) => (
  <Stack spacing={6}>
    {verses.map((verse, i) => (
      <Text key={`verse${i}`} whiteSpace="pre-wrap">
        {`${i + 1}. ${verse}`}
      </Text>
    ))}
  </Stack>
);

export default VerseNumbering;
