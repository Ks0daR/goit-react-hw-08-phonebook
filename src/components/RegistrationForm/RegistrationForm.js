import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';
import styles from './RegistrationForm.module.css';

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
      <form onSubmit={this.handleSubmit}>
        <label className={styles.LabelInput}>
          Enter user login:
          <input
            className={styles.LabelInput}
            placeholder="login..."
            value={name}
            name="name"
            onChange={this.handleChangeInputValue}
          ></input>
        </label>
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

export default connect(null, { onRegister: authOperations.registration })(
  RegistrationForm,
);
