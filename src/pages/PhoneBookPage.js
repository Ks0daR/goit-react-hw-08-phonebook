import React, { Component } from 'react';
import InputForm from '../components/InputForm';
import Contacts from '../components/Contacts';
import FilterForm from '../components/FilterForm';
import { connect } from 'react-redux';
import {
  phoneBookActions,
  phoneBookSelectors,
  phoneBookOperations,
} from '../redux/phoneBook';

class PhoneBookPage extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  componentWillUnmount() {
    this.props.onClear();
  }
  render() {
    return (
      <>
        <InputForm />
        <FilterForm />
        {this.props.contacts.length > 0 && <Contacts />}
      </>
    );
  }
}
const manStateToProps = state => ({
  contacts: phoneBookSelectors.getContacts(state),
});

const mapDispatchToProps = {
  onFetchContacts: phoneBookOperations.fetchContacts,
  onClear: phoneBookActions.clearContactBase,
};

export default connect(manStateToProps, mapDispatchToProps)(PhoneBookPage);
