import { Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

// TODO: AUTOGENERE TYPENE
interface Category {
  name: string;
}

interface Songs {
  title: string;
  melody: string;
  author: string;
  category: Category;
  verses: string[];
}

interface SongTemplateProps {
  songs: [Songs];
}

const SongTemplate = ({ songs }: SongTemplateProps) => {
  return (
    <Stack>
      <Heading>Songs</Heading>
      {songs.map((song) => (
        <>
          <hr />

          <Text>Tittel: {song.title}</Text>
          <Text>Forfatter: {song.author}</Text>
          <Text>Melodi: {song.melody}</Text>
          {song.verses ? (
            song.verses.map((verse) => <p>{verse}</p>)
          ) : (
            <p>Ingen tekst 🤠</p>
          )}
        </>
      ))}
    </Stack>
  );
};

export default SongTemplate;
