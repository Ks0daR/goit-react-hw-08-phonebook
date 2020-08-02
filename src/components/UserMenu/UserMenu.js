import React from 'react';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { NavLink } from 'react-router-dom';
import styles from './UserMenu.module.css';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';

const UserMenu = ({ avatar, email, onLogOut }) => {
  console.log(avatar);
  return (
    <>
      <NavLink className={styles.button} to="/">
        <Button variant="contained" color="primary">
          Home
        </Button>
      </NavLink>
      <Avatar className={styles.avatar} alt={email} src={avatar} />
      <h4 className={styles.name}>
        Welcome, <br /> {email}
      </h4>
      <NavLink className={styles.button} to="/login">
        <Button
          className={styles.button}
          variant="contained"
          color="primary"
          onClick={onLogOut}
        >
          Log Out
        </Button>
      </NavLink>
    </>
  );
};

const mapStateToProps = state => ({
  email: authSelectors.getUserEmail(state),
  avatar: 'https://phonecontactbase.herokuapp.com/images/1590243689978.jpg',
});

const mapDispatchToProps = {
  onLogOut: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
