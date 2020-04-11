import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';
import styles from './LogInForm.module.css';
import { TextField, Button } from '@material-ui/core';

class LogInForm extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChangeInputValue = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onLogIn(this.state);
    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;
    return (
      <>
        <form className={styles.inputForm} onSubmit={this.handleSubmit}>
          <label className={styles.LabelInput}>
            <TextField
              className={styles.text}
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
            Log in
          </Button>
        </form>
      </>
    );
  }
}

export default connect(null, {
  onLogIn: authOperations.logIn,
})(LogInForm);
