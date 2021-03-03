import React from 'react';
import { ChakraProvider, Switch, theme } from '@chakra-ui/react';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import SongView from './components/pages/SongView';
import SettingsView from './components/pages/SettingsView';
import { client } from './api/apolloClient';
import SearchView from './components/pages/SearchView';

const App = () => (
  <div className="App">
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={SearchView} />
            <Route path="/song" component={SongView} />
            <Route path="/settings" component={SettingsView} />
            <Route path="/search" component={SearchView} />
          </Switch>
        </BrowserRouter>
      </ChakraProvider>
    </ApolloProvider>
  </div>
);

export default App;
