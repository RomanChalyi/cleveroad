import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProductList from './productList/ProductList';
import NoMatchPage from '../components/NoMatchPage';
import AuthorizationForm from './authorizationForm/AuthorizationForm';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={ProductList} />
      <Route exact path="/authorization" component={AuthorizationForm} />
      <Route component={NoMatchPage} />
    </Switch>
  );
};

export default Router;
