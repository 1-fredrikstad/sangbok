import groq from "groq";

export const SONG_LIST_QUERY = groq`
  *[_type=='song'&& !(_id in path("drafts.**"))] | order(numbering asc)
  {
    title,
    slug
  }
`;

export const SONG_DETAIL_QUERY = groq`
  *[_type=='song' && slug.current == $slug][0] {
    author,
    melody,
    numbering,
    slug,
    title,
    verses,
    "category" : category -> name,
    'info': {
      'prev': *[_type=='song' && numbering==^.numbering-1][0].slug.current,
      'next': *[_type=='song' && numbering==^.numbering+1][0].slug.current
    }
  }
`;

type Slug = {
  current: string;
};

type Info = {
  prev: string | null;
  next: string | null;
};

export interface SongListEntry {
  title: string;
  slug: Slug;
}

export interface SongDetailType {
  title: string;
  author: string;
  melody: string;
  numbering: number;
  slug: Slug;
  verses: string[];
  category: string;
  info: Info;
}
