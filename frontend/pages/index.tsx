import React from 'react';
import { NextPage } from 'next';
import NavBar from '@components/molecules/NavBar';
import SearchView from '@components/pages/SearchView';

const Home: NextPage = () => (
  <div>
    <SearchView />
    <NavBar />
  </div>
);

export default Home;
