import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Page, Editor } from './containers';

const Routes = () => (
  <Switch>
    <Route exact path="/editor" component={Editor} />
    <Route path="/:link"  render={props => <Page {...props} />}  />
  </Switch>
);

export default Routes;