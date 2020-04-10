import React from 'react';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { toggleTheme } from '../../redux/theme/themeActions';
import PropTypes from 'prop-types';

const Theme = onToggle => (
  <div>
    <Button variant="outlined" color="primary" onClick={onToggle}>
      Primary
    </Button>
    {/* <button
      className={theme ? styles.Button : styles.ButtonDark}
      type="button"
      onClick={() => onToggle()}
    >
      {theme ? 'Dark' : 'Light'}
    </button>
    <p className={theme ? null : styles.TextDark}>
      Active theme {theme ? 'Light' : 'Dark'}
    </p> */}
  </div>
);

Theme.propTypes = {
  onToggle: PropTypes.func.isRequired,
};

const mapDispatchToProps = { onToggle: toggleTheme };

export default connect(null, mapDispatchToProps)(Theme);
