import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { App, Login } from '../pages';

const routes = [{
  path: "/",
  exact: true,
  component: App
},{
  path: "/login",
  exact: true,
  component: Login
}];

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <Route key={ index } exact={ route.exact } path={ route.path } component={ route.component } />
        ))}
      </Switch>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
