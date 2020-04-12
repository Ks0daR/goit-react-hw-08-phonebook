import React, { Component } from 'react';
import Layout from './Layout';
import Loader from './Loader';
import { Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { connect } from 'react-redux';
import { phoneBookSelectors, phoneBookOperations } from '../redux/phoneBook';
import { authOperations, authSelectors } from '../redux/auth';
import PhoneBookPage from '../pages/PhoneBookPage';
import RegistrationPage from '../pages/RegistrationPage';
import LogInPage from '../pages/LogInPage';
import authSelectiors from '../redux/auth/authSelectiors';

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
    this.props.getContacts();
  }
  render() {
    const { error, errorAuth } = this.props;
    return (
      <Layout>
        {this.props.loader && <Loader />}
        {errorAuth && error && <h1>Oops... Something went wrong </h1>}
        <Switch>
          <PrivateRoute exact path="/" component={PhoneBookPage} />
          <PublicRoute
            exact
            path="/register"
            component={RegistrationPage}
            restricted={true}
          />
          <PublicRoute
            exact
            path="/login"
            component={LogInPage}
            restricted={true}
          />
          <Redirect to="/" />
        </Switch>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  loader: phoneBookSelectors.getLoader(state),
  error: phoneBookSelectors.getError(state),
  errorAuth: authSelectiors.getError(state),
  autorisated: authSelectors.getAutorisate(state),
});

const mapDispatchToProps = {
  getContacts: phoneBookOperations.fetchContacts,
  getCurrentUser: authOperations.currentUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
