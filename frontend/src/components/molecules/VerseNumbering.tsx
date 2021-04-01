import React, { FC } from "react";
import { Stack, Text } from "@chakra-ui/react";
import { SongDetailQuery_details } from "@graphqlTypes/SongDetailQuery";

interface VerseNumberingProps {
  song: SongDetailQuery_details;
}

const VerseNumbering: FC<VerseNumberingProps> = ({ song: { verses } }) => {
  return (
    <div>
      <Stack spacing={6} h="100%">
        {verses.map((verse, i) => (
          <>
            <Text key={`verse${i}`} whiteSpace="pre-wrap">
              {`${i + 1}. ${verse}`}
            </Text>
          </>
        ))}
      </Stack>
    </div>
  );
};

export default VerseNumbering;
