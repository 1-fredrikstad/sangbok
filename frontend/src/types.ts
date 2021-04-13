export type Slug = {
  current: string;
};

export type Info = {
  prev: string | null;
  next: string | null;
};

export interface SongListEntry {
  title: string;
  slug: Slug;
  melody?: string;
  order: number;
  spotifyuri?: string;
}

export interface SongDetailType {
  title: string;
  author: string;
  melody: string;
  order: number;
  slug: Slug;
  verses: string[];
  category: string;
  info: Info;
  chorus: string;
  spotifyuri: string;
}
