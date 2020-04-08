import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';

const PrivateRoute = ({
  component: Component,
  isAutentificated,
  ...routeProps
}) => (isAutentificated ? <Component {...routeProps} /> : <Redirect to="/" />);

const mapStateToProps = state => ({
  isAutentificated: authSelectors.getAutorisate(state),
});

export default connect(mapStateToProps)(PrivateRoute);
