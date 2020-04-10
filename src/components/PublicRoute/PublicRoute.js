import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';

const PublicRoute = ({
  component: Component,
  isAutentificated,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props =>
      isAutentificated && routeProps.restricted ? (
        <Redirect to="/" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = state => ({
  isAutentificated: authSelectors.getAutorisate(state),
});

export default connect(mapStateToProps)(PublicRoute);
