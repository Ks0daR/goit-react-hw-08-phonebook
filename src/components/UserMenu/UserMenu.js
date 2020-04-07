import React from 'react';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import styles from './UserMenu.module.css';

const UserMenu = ({ avatar, name }) => {
  return (
    <div>
      <ScopedCssBaseline className={styles.menu}>
        <Avatar
          alt="Remy Sharp"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBCh85bo-3qZSwqbuMGCdzYyQLd4ufSa8aBtp8w4xFaPrr96R2&usqp=CAU"
        />

        <Button variant="contained" color="primary">
          Primary
        </Button>
      </ScopedCssBaseline>
    </div>
  );
};

export default UserMenu;
