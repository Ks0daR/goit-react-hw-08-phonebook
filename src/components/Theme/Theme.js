import React from 'react';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { themeActions, themeSelectors } from '../../redux/theme';
import PropTypes from 'prop-types';

const Theme = ({ onToggle, theme }) => {
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={() => onToggle()}>
        {theme ? 'Light' : 'Dark'}
      </Button>
    </div>
  );
};

Theme.propTypes = {
  onToggle: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  theme: themeSelectors.getTheme(state),
});

const mapDispatchToProps = { onToggle: themeActions.toggleTheme };

export default connect(mapStateToProps, mapDispatchToProps)(Theme);
