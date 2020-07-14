import React, { Component } from 'react';
import Error from '../Error';
import { connect } from 'react-redux';
import { themeSelectors } from '../../redux/theme';
import { phoneBookSelectors, phoneBookOperations } from '../../redux/phoneBook';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import styles from './InputForm.module.css';
import animatedStyles from './animatedStyles.module.css';
import { TextField, Button } from '@material-ui/core';

class InputForm extends Component {
  static propTypes = {
    theme: PropTypes.bool.isRequired,
    getInfo: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    email: '',
    phone: '',
    error: false,
  };

  getInputValue = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  hendleSubmit = e => {
    const { name, email, phone } = this.state;
    e.preventDefault();
    if (this.checkedDoubleInput(name)) {
      this.setState({ error: true });
      return;
    }
    this.props.getInfo({ name, email, phone });
    this.setState({ name: '', phone: '', email: '', error: false });
  };

  checkedDoubleInput = name => {
    return this.props.contacts.some(contact => contact.name === name);
  };

  changeValue = () => {
    this.setState({ error: false });
  };

  render() {
    const { name, phone, email, error } = this.state;

    return (
      <>
        <CSSTransition
          in={error}
          timeout={1000}
          classNames={animatedStyles}
          onEntered={this.changeValue}
          unmountOnExit
        >
          <Error />
        </CSSTransition>
        <form className={styles.Form} onSubmit={this.hendleSubmit}>
          <label className={styles.LabelInput}>
            <TextField
              label="Name:"
              placeholder="Enter name..."
              value={name}
              name="name"
              onChange={this.getInputValue}
              required={true}
            />
          </label>
          <label className={styles.LabelInput}>
            <TextField
              label="Email:"
              placeholder="Enter email..."
              value={email}
              name="email"
              onChange={this.getInputValue}
              required={true}
            />
          </label>
          <label className={styles.LabelInput}>
            <TextField
              label="Phone number:"
              placeholder="Enter phone..."
              value={phone}
              name="phone"
              onChange={this.getInputValue}
              required={true}
            />
          </label>
          <Button
            className={styles.submit}
            type="submit"
            variant="contained"
            color="primary"
          >
            Add contact
          </Button>
        </form>
      </>
    );
  }
}

const mapStateToProps = state => ({
  theme: themeSelectors.getTheme(state),
  contacts: phoneBookSelectors.getContacts(state),
});
const mapDispatchToProps = {
  getInfo: phoneBookOperations.addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(InputForm);
