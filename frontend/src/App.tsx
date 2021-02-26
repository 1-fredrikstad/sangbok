import React from "react";

import SearchView from "./components/pages/SearchView";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import SongView from "./components/pages/SongView";
import SettingsView from "./components/pages/SettingsView";
import NavBar from "./components/molecules/NavBar";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={SearchView} />
          <Route path="/song" component={SongView} />
          <Route path="/settings" component={SettingsView} />
          <Route path="/search" component={SearchView} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
