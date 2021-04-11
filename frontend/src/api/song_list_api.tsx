import client from "@services/groq/client";
import groq from "groq";
import { SongListEntry } from "../types";

const SONG_LIST_QUERY = groq`
  *[_type=='song'&& !(_id in path("drafts.**"))] | order(order asc)
  {
    title,
    slug
  }
`;

export const useSongListQuery = async (): Promise<SongListEntry[]> => {
  const data = await client.fetch<SongListEntry[]>(SONG_LIST_QUERY);
  return data;
};
