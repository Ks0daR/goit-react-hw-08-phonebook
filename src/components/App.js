import React, { Component } from 'react';
import Layout from './Layout';
import Loader from './Loader';
import { Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { connect } from 'react-redux';
import { getLoader, getError } from '../redux/phoneBook/phoneBookSelectors';
import { fetchContacts } from '../redux/phoneBook/phoneBookOperations';
import { authOperations, authSelectors } from '../redux/auth';
import PhoneBookPage from '../pages/PhoneBookPage';
import RegistrationPage from '../pages/RegistrationPage';
import LogInPage from '../pages/LogInPage';

class App extends Component {
  componentDidMount() {
    if (!this.props.autorisated) {
      return;
    }
    // this.props.getContacts();
    this.props.getCurrentUser();
  }
  render() {
    const errorMessage = Object.keys(this.props.error).length;
    return (
      <Layout>
        {this.props.loader && <Loader />}
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
  loader: getLoader(state),
  error: getError(state),
  autorisated: authSelectors.getAutorisate(state),
});

const mapDispatchToProps = {
  getContacts: fetchContacts,
  getCurrentUser: authOperations.currentUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
