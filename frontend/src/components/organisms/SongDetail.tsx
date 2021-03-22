import { Stack, Text } from "@chakra-ui/layout";
import { SongDetailQuery_details } from "@graphqlTypes/SongDetailQuery";
import React, { FC } from "react";
import { SwipeableHandlers } from "react-swipeable";

interface SongDetailProps {
  song: SongDetailQuery_details;
  onSwipe: SwipeableHandlers;
}

const SongDetail: FC<SongDetailProps> = ({ song, onSwipe }) => {
  const { verses } = song;

  return (
    <Stack spacing="3" {...onSwipe} h="100%">
      {verses.map((verseText, verseNumber) => (
        <div key={verseNumber}>
          {verseText.split("\n").map((lineText, lineIndex) =>
            lineIndex === 0 ? (
              <Text fontSize="lg">
                {verseNumber + 1}: {lineText}
              </Text>
            ) : (
              <Text fontSize="lg">{lineText}</Text>
            ),
          )}
        </div>
      ))}
    </Stack>
  );
};

export default SongDetail;
