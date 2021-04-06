import React, { FC } from "react";
import { Box, Button, Heading, IconButton, Link, Text } from "@chakra-ui/react";
import { FaSpotify } from "react-icons/fa";
interface HeaderDetailsProps {
  title: string;
  author: string;
  melody: string;
  spotifyuri: string;
}
const HeaderDetails: FC<HeaderDetailsProps> = ({
  title,
  author,
  melody,
  spotifyuri,
}) => {
  console.log(spotifyuri);

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
      {spotifyuri ? (
        <Link href={spotifyuri}>
          <FaSpotify />
        </Link>
      ) : null}
    </Box>
  );
};

export default HeaderDetails;
