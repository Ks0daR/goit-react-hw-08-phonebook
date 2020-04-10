import React from 'react';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { NavLink } from 'react-router-dom';
import styles from './UserMenu.module.css';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';

const UserMenu = ({ avatar, userName, onLogOut }) => {
  return (
    <>
      <NavLink className={styles.button} to="/">
        <Button variant="contained" color="primary">
          Home
        </Button>
      </NavLink>
      <Avatar className={styles.avatar} alt={userName} src={avatar} />
      <h4 className={styles.name}>
        Welcome, <br /> {userName}
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
  userName: authSelectors.getUserName(state),
});

const mapDispatchToProps = {
  onLogOut: authOperations.logOut,
  avatar:
    'https://previews.123rf.com/images/nexusby/nexusby1810/nexusby181000286/111362910-default-avatar-placeholder-profile-icon-male.jpg',
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
