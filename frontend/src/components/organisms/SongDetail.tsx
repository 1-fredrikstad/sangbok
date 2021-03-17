import { Stack, Text } from "@chakra-ui/layout";
import { SongDetailQuery_details } from "@graphqlTypes/SongDetailQuery";
import React, { FC } from "react";

interface SongDetailProps {
    song: SongDetailQuery_details;
}

const SongDetail: FC<SongDetailProps> = ({ song }) => {
    const { verses } = song;

    return (
        <Stack spacing={6}>
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
