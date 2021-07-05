import React from "react";
import Login from "./login";
import Dashboard from "./dashboard";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
