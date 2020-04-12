import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { phoneBookSelectors, phoneBookActions } from '../../redux/phoneBook';
import { CSSTransition } from 'react-transition-group';
import styles from './FilterForm.module.css';
import animatedStyles from './animatedStyles.module.css';

function FilterForm({ filterValue, contacts, onSearchQuery }) {
  if (contacts.length === 1) {
    onSearchQuery();
  }
  return (
    <CSSTransition
      in={contacts.length > 1}
      timeout={250}
      classNames={animatedStyles}
      unmountOnExit
    >
      <label className={styles.search}>
        <input
          value={filterValue}
          onChange={e => onSearchQuery(e.target.value)}
        />
      </label>
    </CSSTransition>
  );
}

FilterForm.propTypes = {
  filterValue: PropTypes.string.isRequired,
  onSearchQuery: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filterValue: phoneBookSelectors.getFilter(state),
  contacts: phoneBookSelectors.getContacts(state),
});

const mapDispatchToProps = {
  onSearchQuery: phoneBookActions.changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterForm);
