import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProductList from './productList/ProductList';
import NoMatchPage from '../components/NoMatchPage';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={ProductList} />
      <Route component={NoMatchPage} />
      <Route></Route>
    </Switch>
  );
};

export default Router;
