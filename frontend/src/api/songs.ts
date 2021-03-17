import { gql } from "@apollo/client";

export const SongNameQuery = gql`
  query GetSongNames {
    allSong(where: { _: { is_draft: false } }, sort: { numbering: ASC }) {
      title
      numbering
    }
  }
`;
