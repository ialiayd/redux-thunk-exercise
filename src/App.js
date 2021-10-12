import CharacterList from "./components/CharacterList";
import "./styles.css";

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CharacterDetail from "./components/CharacterDetail";

export default function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Character List</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <CharacterList />
          </Route>

          <Route path="/character/:id">
            <CharacterDetail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
