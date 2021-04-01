import { Box, Text } from "@chakra-ui/layout";
import { SongDetailQuery_details } from "@graphqlTypes/SongDetailQuery";
import React, { FC } from "react";

interface SingleVerseProps {
  song: SongDetailQuery_details;
}

const SongDetail: FC<SingleVerseProps> = ({ song: { verses } }) => (
  <Box h="100%">
    <Text whiteSpace="pre-wrap">{verses[0]}</Text>
  </Box>
);

export default SongDetail;
