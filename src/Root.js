import React from 'react';
import App from './app/App';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';

const customHistory = createBrowserHistory();
const Root = () => {
  return (
    <Provider store={store}>
      <Router history={customHistory}>
        <App />
      </Router>
    </Provider>
  );
};

export default Root;
