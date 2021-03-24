import { Box, Heading, Stack, Text } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/react";
import Header from "@components/molecules/Header";
import HeaderDetails from "@components/molecules/HeaderDetails";
import React, { FC } from "react";
import { SwipeableHandlers } from "react-swipeable";
import { SongDetailType } from "src/api/songs";

interface SongDetailProps {
  song: SongDetailType;
  onSwipe: SwipeableHandlers;
}

const SongDetail: FC<SongDetailProps> = ({ song, onSwipe }) => {
  const { author, title, verses, melody } = song;

  return (
    <>
      <Header color="#D6F2E6">
        <Heading>
          <HeaderDetails title={title} author={author} melody={melody} />
        </Heading>
      </Header>

      <Stack spacing={6} {...onSwipe} h="100%" p="1rem 2.5rem">
        {verses.map((verse, i) => (
          <Text key={`verse${i}`} whiteSpace="pre-line">
            {verse}
          </Text>
        ))}
      </Stack>
    </>
  );
};

export default SongDetail;
