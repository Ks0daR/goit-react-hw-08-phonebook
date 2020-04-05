import React, { Component } from 'react';
import styles from './RegistrationForm.module.css';

class RegistrationForm extends Component {
  state = {
    login: '',
    email: '',
    password: '',
  };

  handleChangeInputValue = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { email, login, password } = this.state;
    return (
      <form>
        <label className={styles.LabelInput}>
          Enter user E-mail:
          <input
            className={styles.LabelInput}
            placeholder="E-mail..."
            value={email}
            name="email"
            onChange={this.handleChangeInputValue}
          ></input>
        </label>
        <label className={styles.LabelInput}>
          Enter user login:
          <input
            className={styles.LabelInput}
            placeholder="login..."
            value={login}
            name="login"
            onChange={this.handleChangeInputValue}
          ></input>
        </label>
        <label className={styles.LabelInput}>
          Enter user password:
          <input
            type="password"
            className={styles.LabelInput}
            placeholder="password..."
            name="password"
            value={password}
            onChange={this.handleChangeInputValue}
          ></input>
        </label>
        <button type="submit">Register</button>
      </form>
    );
  }
}

export default RegistrationForm;
