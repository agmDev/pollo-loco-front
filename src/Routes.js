import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Containers/Home/Home";
import Login from "./Containers/Users/Login";
import NotFound from "./Containers/Error/NotFound";
import AppliedRoute from "./Components/AppliedRoute";


export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;

