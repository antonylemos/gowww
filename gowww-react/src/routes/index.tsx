import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import Standings from '../pages/Standings';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />

    <Route path="/dashboard" exact component={Dashboard} isPrivate />
    <Route path="/standings" exact component={Standings} isPrivate />
  </Switch>
);

export default Routes;
