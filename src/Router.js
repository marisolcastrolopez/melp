import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import Login from "./components/Login";

const AppRouter = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/map" component={Main} />
      </Switch>
    </main>
  );
};

export default AppRouter;
