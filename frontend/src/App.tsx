import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CSSReset, ThemeProvider, theme } from '@chakra-ui/react';
import { ApolloProvider } from '@apollo/client';
import SearchView from './components/pages/SearchView';

import './App.css';
import SongView from './components/pages/SongView';
import SettingsView from './components/pages/SettingsView';
import { client } from './api/apolloClient';

const App = () => (
  <div className="App">
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={SearchView} />
            <Route path="/song" component={SongView} />
            <Route path="/settings" component={SettingsView} />
            <Route path="/search" component={SearchView} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  </div>
);

export default App;
