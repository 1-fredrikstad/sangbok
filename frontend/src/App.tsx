import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SearchView from "./components/pages/SearchView";
import SettingsView from "./components/pages/SettingsView";
import SongView from "./components/pages/SongView";

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
