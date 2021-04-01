import { Box, Heading, Stack, Text } from "@chakra-ui/layout";
import Header from "@components/molecules/Header";
import HeaderDetails from "@components/molecules/HeaderDetails";
import { SongDetailQuery_details } from "@graphqlTypes/SongDetailQuery";
import React, { FC } from "react";
import { SwipeableHandlers } from "react-swipeable";
import SingleVerse from "@components/molecules/SingleVerse";

interface SongDetailProps {
  song: SongDetailQuery_details;
  onSwipe: SwipeableHandlers;
}

const SongDetail: FC<SongDetailProps> = ({ song, onSwipe }) => {
  const { author, title, verses, melody, chorus, verseNumbering } = song;

  return (
    <>
      <Header color="#D6F2E6">
        <Heading>
          <HeaderDetails title={title} author={author} melody={melody} />
        </Heading>
      </Header>

      <Box p="1rem 2.5rem" {...onSwipe}>
        {verses.length == 1 && <SingleVerse song={song} />}
        {/* {chorus && <ChorusView song={song} />} */}
      </Box>
    </>
  );
};

export default SongDetail;

// <Stack spacing={6} h="100%">
// {verses.map((verse, i) => (
//   <Text key={`verse${i}`} whiteSpace="pre-wrap">
//     {verse}
//   </Text>
// ))}
// </Stack>
