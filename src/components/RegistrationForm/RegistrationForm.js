import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';
import styles from './RegistrationForm.module.css';
import { TextField, Button } from '@material-ui/core';

class RegistrationForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChangeInputValue = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onRegister(this.state);
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, name, password } = this.state;
    return (
      <form className={styles.inputForm} onSubmit={this.handleSubmit}>
        <label className={styles.LabelInput}>
          <TextField
            label="Enter user login:"
            variant="filled"
            value={name}
            name="name"
            onChange={this.handleChangeInputValue}
            required={true}
          />
        </label>
        <label className={styles.LabelInput}>
          <TextField
            label="Enter user E-mail:"
            variant="filled"
            value={email}
            name="email"
            onChange={this.handleChangeInputValue}
            required={true}
          />
        </label>
        <label className={styles.LabelInput}>
          <TextField
            label="Enter user password:"
            variant="filled"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChangeInputValue}
            required={true}
          />
        </label>
        <Button
          className={styles.submit}
          variant="contained"
          color="primary"
          type="submit"
        >
          Register
        </Button>
      </form>
    );
  }
}

export default connect(null, { onRegister: authOperations.registration })(
  RegistrationForm,
);
