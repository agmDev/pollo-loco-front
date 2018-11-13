import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Users/Login";
import NotFound from "./Pages/Error/NotFound";
import AppliedRoute from "./Components/AppliedRoute";
import Room from "./Pages/Room/Room";


export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    <AppliedRoute path="/room" exact component={Room} props={childProps} />
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;

