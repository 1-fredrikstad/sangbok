import { gql } from "@apollo/client";

export const SongNameQuery = gql`
    query GetSongNames {
        allSong(where: { _: { is_draft: false } }, sort: { numbering: ASC }) {
            _id
            title
            numbering
        }
    }
`;

export const SONG_DETAIL_QUERY = gql`
    query SongDetailQuery($songNumber: Float) {
        details: allSong(where: { numbering: { eq: $songNumber } }) {
            title
            melody
            author
            category {
                name
            }
            verses
        }
    }
`;
