import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';

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

const SongTemplate = ({ songs }: SongTemplateProps) => (
  <Grid templateColumns="repeat(8, 1fr)" gap={4} padding={3}>
    {songs.map((song) => (
      <>
        {song.title && (
          <>
            <GridItem colSpan={1} />
            <GridItem colSpan={7} onClick={() => console.log(song.title)}>
              {song.title}
            </GridItem>
          </>
        )}
      </>
    ))}
  </Grid>
);

export default SongTemplate;
