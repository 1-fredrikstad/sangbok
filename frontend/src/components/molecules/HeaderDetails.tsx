import React, { FC } from "react";
import { Box, Button, Heading, Link, Stack, Text } from "@chakra-ui/react";
import { FaSpotify } from "react-icons/fa";
interface HeaderDetailsProps {
  title: string;
  author: string;
  melody: string;
  category: string;
  spotifyuri: string;
  order: number;
}
const HeaderDetails: FC<HeaderDetailsProps> = ({
  title,
  author,
  melody,
  category,
  spotifyuri,
  order,
}) => {
  return (
    <Stack p="1.5rem 2.5rem 0rem" spacing={2}>
      <Heading fontWeight="300" as="h1" size="xl">
        {order + 1}. {title}
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
          <Button w="7rem" h="40px">
            Åpne i
            <Box ml={2}>
              <FaSpotify size="21px" />
            </Box>
          </Button>
        </Link>
      )}
    </Stack>
  );
};

export default HeaderDetails;
