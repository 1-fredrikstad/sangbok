import client from "@services/groq/client";
import groq from "groq";
import { SongDetailType } from "src/types";

export const SONG_DETAIL_QUERY = groq`
  *[_type=='song' && slug.current == $slug][0] {
    author,
    melody,
    order,
    slug,
    chorus,
    title,
    verses,
    spotifyuri,
    "category" : category -> name,
    'info': {
      'prev': *[_type=='song' && order==^.order-1][0].slug.current,
      'next': *[_type=='song' && order==^.order+1][0].slug.current
    }
  }
`;

export const useSongDetailQuery = async (
  slug: string,
): Promise<SongDetailType> => {
  const data = await client.fetch<SongDetailType>(SONG_DETAIL_QUERY, { slug });
  return data;
};
