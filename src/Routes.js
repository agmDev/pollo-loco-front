import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import Home from './Components/Home/Home';
import Login from './Components/Users/Login';
import Register from './Components/Users/Register';
import NotFound from './Components/Error/NotFound';
import AppliedRoute from './Components/AppliedRoute';
import Room from './Components/Room/Room';


const Root = ({ childProps }) => (
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    <AppliedRoute path="/room" exact component={Room} props={childProps} />
    <AppliedRoute path="/signup" exact component={Register} props={childProps} />
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>
);

Root.propTypes = {
  childProps: PropTypes.objectOf(
    Object,
  ).isRequired,
};

export default Root;
