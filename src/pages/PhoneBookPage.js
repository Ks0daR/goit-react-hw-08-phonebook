import React, { Component } from 'react';
import InputForm from '../components/InputForm';
import Contacts from '../components/Contacts';
import FilterForm from '../components/FilterForm';
import { connect } from 'react-redux';
import { clearContactBase } from '../redux/phoneBook/phoneBookActions';
import { getContacts } from '../redux/phoneBook/phoneBookSelectors';
import { fetchContacts } from '../redux/phoneBook/phoneBookOperations';

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
  contacts: getContacts(state),
});

const mapDispatchToProps = {
  onFetchContacts: fetchContacts,
  onClear: clearContactBase,
};

export default connect(manStateToProps, mapDispatchToProps)(PhoneBookPage);
