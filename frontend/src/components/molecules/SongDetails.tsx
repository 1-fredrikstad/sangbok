import { Box, Heading } from "@chakra-ui/react";
import React, { FC } from "react";

interface SongDetailsProps {
  title: string;
}
const SongDetails: FC<SongDetailsProps> = ({ title }) => {
  return (
    <Box p="2.5rem 2.5rem 1.5rem">
      <Heading fontWeight="300" as="h1" size="xl">
        {title}
      </Heading>
    </Box>
  );
};

export default SongDetails;
