import React from 'react';
import ContactListItem from './ContactListItem';
import { connect } from 'react-redux';
import { themeSelectors } from '../../redux/theme';
import {
  phoneBookSelectors,
  phoneBookActions,
  phoneBookOperations,
} from '../../redux/phoneBook';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styles from './Contacts.module.css';
import animatedStyles from './animatedStyles.module.css';

const Contacts = ({ elements, theme, onRemove }) => {
  return (
    <>
      <h2 className={theme ? styles.Title : styles.TitleDark}>Contacts</h2>
      <TransitionGroup component="ul" className={styles.list}>
        {elements.length > 0
          ? elements.map(({ _id, name, phone, email }) => (
              <CSSTransition
                key={_id}
                timeout={250}
                classNames={animatedStyles}
              >
                <ContactListItem
                  id={_id}
                  name={name}
                  phone={phone}
                  email={email}
                  onRemove={() => onRemove(_id, elements.length)}
                  theme={theme}
                />
              </CSSTransition>
            ))
          : null}
      </TransitionGroup>
    </>
  );
};

Contacts.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  theme: themeSelectors.getTheme(state),
  elements: phoneBookSelectors.getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onRemove: (id, count) => {
    if (count < 2) {
      dispatch(phoneBookActions.changeFilter(''));
    }
    dispatch(phoneBookOperations.removeContact(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
