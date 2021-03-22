import { Box, Heading, Text } from "@chakra-ui/react";
import React, { FC } from "react";

interface SongDetailsProps {
  title: string;
  author: string
}
const SongDetails: FC<SongDetailsProps> = ({ title, author }) => {
  return (
    <Box p="2.5rem 2.5rem 1.5rem">
      <Heading fontWeight="300" as="h1" size="xl">
        {title}
      </Heading>
      <Text fontSize="sm" fontWeight="light">
        Forfatter: {author}
      </Text>
    </Box>
  );
};

export default SongDetails;
