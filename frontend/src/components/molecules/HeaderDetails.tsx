import { Box, Button, Heading, Link, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { FaSpotify } from 'react-icons/fa';

interface Props {
  title: string;
  author: string;
  melody: string;
  category: string;
  audioUrl: string;
  spotifyuri: string;
  order: number;
  number?: number;
}

const HeaderDetails: React.FC<Props> = ({ title, author, melody, category, audioUrl, spotifyuri, number }) => {
  return (
    <Stack p="1.5rem 2.5rem 0rem" spacing={2}>
      <Heading fontWeight="300" as="h1" size="xl">
        {number ? number + ". " : ""}{title}
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
      {audioUrl && <audio src={audioUrl} controls />}
    </Stack>
  );
};

export default HeaderDetails;
