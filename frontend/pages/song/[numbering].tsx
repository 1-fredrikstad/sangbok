import { useQuery } from "@apollo/client";
import { Skeleton } from "@chakra-ui/skeleton";
import SongDetail from "@components/organisms/SongDetail";
import Layout from "@components/templates/Layout";
import { SongDetailQuery } from "@graphqlTypes/SongDetailQuery";
import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { SONG_DETAIL_QUERY } from "src/api/songs";

interface ISongView {
    verses: string[];
}

const SongView: NextPage = () => {
    const router = useRouter();
    const { numbering } = router.query;

    const { data, loading } = useQuery<SongDetailQuery>(SONG_DETAIL_QUERY, {
        variables: { songNumber: +numbering },
    });

    return (
        <Layout>
            {loading || !data ? (
                <Skeleton w="100%" h="100%" />
            ) : (
                <SongDetail song={data.details[0]} />
            )}
        </Layout>
    );
};

export default SongView;
