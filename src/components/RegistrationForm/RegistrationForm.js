import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';
import styles from './RegistrationForm.module.css';
// import { TextField, Button } from '@material-ui/core';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';

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
    this.setState({ avatar: '', email: '', password: '' });
  };

  render() {
    const { email, password, avatar } = this.state;

    return (
      <div className="row">
        <form className={styles.inputForm} onSubmit={this.handleSubmit}>
          <div className="row ">
            <div className=" file-field input col s12">
              <div className="btn">
                <span>File</span>
                <input type="file" onChange={this.handleAddFile} />
              </div>
              <div className="file-path-wrapper">
                <input
                  className="file-path validate"
                  type="text"
                  readOnly={true}
                  value={avatar.name ? avatar.name : ''}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <input
                name="email"
                type="email"
                placeholder="E-mail"
                value={email}
                className="validate"
                onChange={this.handleChangeInputValue}
              />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <input
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                className="validate"
                onChange={this.handleChangeInputValue}
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>

          {/* <label className={styles.LabelInput}>
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
        </Button> */}

          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Submit
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { onRegister: authOperations.registration })(
  RegistrationForm,
);
