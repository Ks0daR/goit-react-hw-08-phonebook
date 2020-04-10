import React from 'react';
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import styles from './Autorisation.module.css';

const Autorisation = () => (
  <>
    <NavLink className={styles.link} to="/register">
      <Button variant="contained" color="primary" disableElevation>
        Registration
      </Button>
    </NavLink>
    <NavLink className={styles.link} to="/login">
      <Button variant="contained" color="secondary" disableElevation>
        Log In
      </Button>
    </NavLink>
  </>
);
export default Autorisation;
