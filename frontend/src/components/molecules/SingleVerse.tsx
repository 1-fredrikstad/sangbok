import { Box, Text } from "@chakra-ui/layout";
import { SongDetailQuery_details } from "@graphqlTypes/SongDetailQuery";
import React, { FC } from "react";

interface SingleVerseProps {
  song: SongDetailQuery_details;
}

const SongDetail: FC<SingleVerseProps> = ({ song: { verses } }) => {
  return (
    <>
      <Box h="100%">
        <Text whiteSpace="pre-wrap">{verses[0]}</Text>
      </Box>
    </>
  );
};

export default SongDetail;

// <Stack spacing={6} h="100%">
// {verses.map((verse, i) => (
//   <Text key={`verse${i}`} whiteSpace="pre-wrap">
//     {verse}
//   </Text>
// ))}
// </Stack>
