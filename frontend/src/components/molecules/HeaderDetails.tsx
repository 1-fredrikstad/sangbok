import React, { FC } from "react";
import { Box, Heading, Link, Text } from "@chakra-ui/react";
import { FaSpotify } from "react-icons/fa";
interface HeaderDetailsProps {
  title: string;
  author: string;
  melody: string;
  category: string;
  spotifyuri: string;
}
const HeaderDetails: FC<HeaderDetailsProps> = ({
  title,
  author,
  melody,
  category,
  spotifyuri,
}) => {
  return (
    <Box p="1.5rem 2.5rem 0rem">
      <Heading fontWeight="300" as="h1" size="xl" mb={1}>
        {title}
      </Heading>
      <Text fontSize="sm" fontWeight="light" mb={0.4}>
        Forfatter: {author}
      </Text>
      <Text fontSize="sm" fontWeight="light" mb={0.4}>
        Melodi: {melody}
      </Text>
      <Text fontSize="sm" fontWeight="light" mb={0.4}>
        Kategori: {category}
      </Text>
      {spotifyuri ? (
        <Link href={spotifyuri} mb={0.4}>
          <FaSpotify />
        </Link>
      ) : null}
    </Box>
  );
};

export default HeaderDetails;
