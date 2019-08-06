import React from "react";
import { Route, Switch } from "react-router-dom";
import MapContainer from "./components/MarkerMap";
import Login from "./components/Login";

const AppRouter = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/map" component={MapContainer} />
      </Switch>
    </main>
  );
};

export default AppRouter;
