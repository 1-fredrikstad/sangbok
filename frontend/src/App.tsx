import React from "react";

import SearchView from "./components/pages/SearchView";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import SongView from "./components/pages/SongView";
import SettingsView from "./components/pages/SettingsView";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { ApolloProvider } from "@apollo/client";
import { client } from "./api/apolloClient";

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
