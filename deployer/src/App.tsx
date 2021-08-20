import React from "react";
import { Switch, Route } from "react-router-dom";

import { Homepage } from "./Homepage";
import { Dapp } from "./Dapp";

export const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/dashboard/">
        <Dapp />
      </Route>
      <Route path="*" component={ErrorPage} />
    </Switch>
  );
};

const ErrorPage = () => {
  return <div> 404 </div>;
};
