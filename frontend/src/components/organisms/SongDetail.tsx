import { Stack, Text } from "@chakra-ui/layout";
import { SongDetailQuery_details } from "@graphqlTypes/SongDetailQuery";
import { useRouter } from "next/dist/client/router";
import React, { FC } from "react";
import { useSwipeable } from "react-swipeable";

interface SongDetailProps {
  song: SongDetailQuery_details;
  next: string | null;
  prev: string | null;
}

const SongDetail: FC<SongDetailProps> = ({ song, next, prev }) => {
  const { verses } = song;
  const { push } = useRouter();
  const swipeRoute = (route, eventData) => {
    console.log(eventData);
    if (route != null) push(`/song/${route}`);
  };
  const handlers = useSwipeable({
    onSwipedLeft: (eventData) => swipeRoute(next, eventData),
    onSwipedRight: (eventData) => swipeRoute(prev, eventData),
  });
  console.log(handlers);

  return (
    <Stack spacing="3" {...handlers} h="100%">
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
