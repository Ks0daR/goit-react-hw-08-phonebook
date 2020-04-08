import React from 'react';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import styles from './UserMenu.module.css';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';

const UserMenu = ({ avatar, userName, onLogOut }) => {
  return (
    <div>
      <ScopedCssBaseline className={styles.menu}>
        <Avatar
          alt={userName}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBCh85bo-3qZSwqbuMGCdzYyQLd4ufSa8aBtp8w4xFaPrr96R2&usqp=CAU"
        />
        <h4>Welcome {userName}</h4>
        <Button variant="contained" color="primary" onClick={onLogOut}>
          Log Out
        </Button>
      </ScopedCssBaseline>
    </div>
  );
};

const mapStateToProps = state => ({
  userName: authSelectors.getUserName(state),
});

const mapDispatchToProps = {
  onLogOut: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
