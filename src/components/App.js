import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Layout from './Layout';
import Loader from './Loader';
import { connect } from 'react-redux';
import { getLoader, getError } from '../redux/phoneBook/phoneBookSelectors';
import { fetchContacts } from '../redux/phoneBook/phoneBookOperations';
import PhoneBookPage from '../pages/PhoneBookPage';
import RegistrationPage from '../pages/RegistrationPage';

class App extends Component {
  componentDidMount() {
    this.props.getContacts();
  }
  render() {
    const errorMessage = Object.keys(this.props.error).length;
    return (
      <Layout>
        {this.props.loader && <Loader />}
        <Switch>
          <Route exact path="/" component={PhoneBookPage} />
          <Route exact path="/register" component={RegistrationPage} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  loader: getLoader(state),
  error: getError(state),
});

const mapDispatchToProps = {
  getContacts: fetchContacts,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
