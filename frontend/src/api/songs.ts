import { gql } from "@apollo/client";

export const SONG_TITLE_QUERY = gql`
  query GetSongTitleQuery {
    songs: allSong(
      where: { _: { is_draft: false } }
      sort: { numbering: ASC }
    ) {
      _id
      title
      slug {
        current
      }
    }
  }
`;

export const SONG_DETAIL_QUERY = gql`
  query SongDetailQuery($songId: ID!) {
    details: Song(id: $songId) {
      title
      melody
      author
      verseNumbering
      chorus
      category {
        name
      }
      verses
    }
  }
`;
