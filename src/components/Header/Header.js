import React from 'react';
import UserMenu from '../UserMenu';
import Autorisation from '../Autorisation';
import Theme from '../Theme';
import { connect } from 'react-redux';
import { getTheme } from '../../redux/theme/themeSelectors';
import { authSelectors } from '../../redux/auth';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import styles from './Header.module.css';
import animateStyles from './animateStyles.module.css';

const Header = ({ theme, isAutorisated }) => (
  <>
    <div className={theme ? styles.Header : styles.HeaderDark}>
      <div>
        <CSSTransition
          in={true}
          appear
          timeout={500}
          classNames={animateStyles}
          unmountOnExit
        >
          <h1 className={theme ? styles.Title : styles.TitleDark}>
            Phone Book
          </h1>
        </CSSTransition>
      </div>
      <div className={styles.Navigation}>
        {isAutorisated ? <UserMenu /> : <Autorisation />}
      </div>
    </div>
    <Theme />
  </>
);

Header.propTypes = {
  theme: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  theme: getTheme(state),
  isAutorisated: authSelectors.getAutorisate(state),
});

export default connect(mapStateToProps)(Header);
