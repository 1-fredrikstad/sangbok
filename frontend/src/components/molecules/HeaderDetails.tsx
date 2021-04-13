import React, { FC } from "react";
import { Heading, Link, Stack, Text } from "@chakra-ui/react";
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
    <Stack p="1.5rem 2.5rem 0rem" spacing={2}>
      <Heading fontWeight="300" as="h1" size="xl">
        {title}
      </Heading>
      {author && (
        <Text fontSize="sm" fontWeight="light">
          Forfatter: {author}
        </Text>
      )}
      {melody && (
        <Text fontSize="sm" fontWeight="light">
          Melodi: {melody}
        </Text>
      )}
      {category && (
        <Text fontSize="sm" fontWeight="light">
          Kategori: {category}
        </Text>
      )}
      {spotifyuri && (
        <Link href={spotifyuri}>
          <FaSpotify />
        </Link>
      )}
    </Stack>
  );
};

export default HeaderDetails;
