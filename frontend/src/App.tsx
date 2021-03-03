import React from 'react';
import './App.css';
import SongView from './components/pages/SongView';
import SettingsView from './components/pages/SettingsView';
import { ChakraProvider, Switch, theme } from '@chakra-ui/react';
import { ApolloProvider } from '@apollo/client';
import { client } from './api/apolloClient';
import { BrowserRouter, Route } from 'react-router-dom';
import SearchView from './components/pages/SearchView';

const App = () => {
  return (
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
};

export default App;
