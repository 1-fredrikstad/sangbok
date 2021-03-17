import React from "react";
import { NextPage } from "next";
import NavBar from "@components/molecules/NavBar";
import Song from "./song";
import { Flex } from "@chakra-ui/react";
import SearchInput from "@components/atoms/SearchInput";
import Header from "@components/molecules/Header";
import Layout from "@components/templates/Layout";
import SongList from "@components/organisms/SongList";

const Search: NextPage = () => (
    <Layout>
        <Header color="#FFD687">
            <SearchInput />
        </Header>
        <SongList />
    </Layout>
);

export default Search;
