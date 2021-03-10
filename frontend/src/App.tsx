import { Flex } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/molecules/NavBar';
import SearchView from './components/pages/SearchView';
import SettingsView from './components/pages/SettingsView';
import SongView from './components/pages/SongView';

const App = () => (
    <BrowserRouter>
      {/* HEADER LIGGER HER OG OPPDATERES */}

      {/* CONTENT */}
      <Switch>
        <Flex overflow="scroll" height="100%">
          <Route path="/" exact component={SearchView} />
          <Route path="/song" component={SongView} />
          <Route path="/settings" component={SettingsView} />
          <Route path="/search" component={SearchView} />
        </Flex>
      </Switch>

      <Flex>
        <NavBar />
      </Flex>
    </BrowserRouter>
  );

export default App;
