import React from "react";
import { Route, Switch } from "react-router-dom";
import Apresentation from "../pages/Apresentation";
import Home from "../pages/Home";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/apresentacao">
        <Apresentation />
      </Route>
    </Switch>
  );
}

export default Routes;
