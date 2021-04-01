import { Stack, Text } from "@chakra-ui/react";
import { SongDetailQuery_details } from "@graphqlTypes/SongDetailQuery";
import React, { FC } from "react";

interface VerseChorusNumberingProps {
  song: SongDetailQuery_details;
}

const VerseChorusNumbering: FC<VerseChorusNumberingProps> = ({
  song: { verses, chorus },
}) => (
  <Stack spacing={6} h="100%">
    {verses.map((verse, i) => (
      <>
        <Text key={`verse${i}`} whiteSpace="pre-wrap">
          {`${i + 1}. ${verse}`}
        </Text>

        {i === 0 && <Text>{`Ref: ${chorus}`}</Text>}
      </>
    ))}
  </Stack>
);

export default VerseChorusNumbering;
