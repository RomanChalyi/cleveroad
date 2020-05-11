import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BackpackList from './backpackList/BackpackList';
import NoMatchPage from '../components/NoMatchPage';
import AuthorizationForm from './authorizationForm/AuthorizationForm';
import Form from './form/Form';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={BackpackList} />
      <Route exact path="/sign_in" render={(props) => <AuthorizationForm {...props} isSignIn />} />
      <Route exact path="/sign_up" component={AuthorizationForm} />
      <Route exact path="/add" component={Form} />
      <Route component={NoMatchPage} />
    </Switch>
  );
};

export default Router;
