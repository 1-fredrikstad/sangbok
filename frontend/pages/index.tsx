import React from "react";
import { NextPage } from "next";
import NavBar from "@components/molecules/NavBar";
import SongView from "@components/pages/SongView";

const Home: NextPage = () => (
    <div>
        <SongView />
        <NavBar />
    </div>
);

export default Home;
