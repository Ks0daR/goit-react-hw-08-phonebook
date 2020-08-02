import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactIlstItem.module.css';
import { Button } from '@material-ui/core';

function ContactListItem({ id, name, phone, email, theme, onRemove }) {
  return (
    <li className={theme ? styles.ListElement : styles.ListElementDark}>
      {name} {phone} {email}
      <Button
        variant="outlined"
        color="primary"
        onClick={() => onRemove(id)}
        type="button"
      >
        Delete
      </Button>
    </li>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  theme: PropTypes.bool.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ContactListItem;
