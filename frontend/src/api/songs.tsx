import client from '../services/groq/client';
import groq from 'groq';
import { SongDetailType, SongListEntry } from '../types';

const SONG_LIST_QUERY = groq`
  *[_type=='song'&& !(_id in path("drafts.**"))] | order(order asc)
  {
    title,
    slug,
    melody,
    order,
    number,
    spotifyuri,
    'audioUrl': audio.asset -> url
  }
`;

export const fetchSongList = async (): Promise<SongListEntry[]> => {
  const data = await client.fetch<SongListEntry[]>(SONG_LIST_QUERY);
  return data;
};

export const SONG_DETAIL_QUERY = groq`
  *[_type=='song' && slug.current == $slug][0] {
    author,
    melody,
    order,
    number,
    slug,
    chorus,
    title,
    verses,
    "audioUrl" : audio.asset -> url,
    spotifyuri,
    "category" : category -> name,
    'info': {
      'prev': *[_type=='song' && order==^.order-1][0].slug.current,
      'next': *[_type=='song' && order==^.order+1][0].slug.current
    },
    songImage {
      alt,
      'url': asset -> url
    }
  }
`;

export const fetchSongDetail = async (slug: string): Promise<SongDetailType> => {
  const data = await client.fetch<SongDetailType>(SONG_DETAIL_QUERY, { slug });
  return data;
};
