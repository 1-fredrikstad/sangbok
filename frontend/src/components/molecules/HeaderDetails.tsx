import { Box, Heading, Text } from "@chakra-ui/react";
import React, { FC } from "react";

interface HeaderDetailsProps {
  title: string;
  author: string;
  melody: string;
}
const HeaderDetails: FC<HeaderDetailsProps> = ({ title, author, melody }) => {
  return (
    <Box p="2.5rem 2.5rem 1.5rem">
      <Heading fontWeight="300" as="h1" size="xl">
        {title}
      </Heading>
      <Text fontSize="sm" fontWeight="light">
        Forfatter: {author}
      </Text>
      <Text fontSize="sm" fontWeight="light">
        Melodi: {melody}
      </Text>
    </Box>
  );
};

export default HeaderDetails;
