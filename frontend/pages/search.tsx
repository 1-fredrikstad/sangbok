import React from "react";
import { NextPage } from "next";
import NavBar from "@components/molecules/NavBar";
import Song from "./song";
import { Flex } from "@chakra-ui/react";
import SearchInput from "@components/atoms/SearchInput";
import Header from "@components/molecules/Header";

const Search: NextPage = () => (
    <Flex flexDir="column" w="100%">
        <Header color="#FFD687">
            <SearchInput />
        </Header>
        <Song />
        <NavBar />
    </Flex>
);

export default Search;
