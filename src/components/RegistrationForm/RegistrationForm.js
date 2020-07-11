import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';
import styles from './RegistrationForm.module.css';
import { TextField, Button } from '@material-ui/core';

class RegistrationForm extends Component {
  state = {
    avatar: '',
    email: '',
    password: '',
  };

  handleChangeInputValue = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleAddFile = ({ target: { files } }) => {
    this.setState({ avatar: files[0] });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { avatar, email, password } = this.state;
    const userInfo = new FormData();
    userInfo.append('avatar', avatar);
    userInfo.append('email', email);
    userInfo.append('password', password);
    this.props.onRegister(userInfo);
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;
    return (
      <form className={styles.inputForm} onSubmit={this.handleSubmit}>
        <label className={styles.LabelInput}>
          <TextField
            variant="filled"
            type="file"
            onChange={this.handleAddFile}
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
