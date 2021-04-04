import { Box, Text } from "@chakra-ui/layout";
import React, { FC } from "react";
import { SongDetailType } from "src/api/songs";

interface SingleVerseProps {
  song: SongDetailType;
}

const SingleVerse: FC<SingleVerseProps> = ({ song: { verses } }) => (
  <Box h="100%">
    <Text whiteSpace="pre-wrap">{verses[0]}</Text>
  </Box>
);

export default SingleVerse;
