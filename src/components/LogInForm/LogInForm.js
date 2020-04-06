import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';
import styles from './LogInForm.module.css';

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
        <form onSubmit={this.handleSubmit}>
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
          <button type="submit">Log In</button>
        </form>

        <button type="submit" onClick={this.props.onLogOut}>
          Log In
        </button>
      </>
    );
  }
}

export default connect(null, {
  onLogIn: authOperations.logIn,
  onLogOut: authOperations.logOut,
})(LogInForm);
