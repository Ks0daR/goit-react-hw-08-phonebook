import React from 'react';
import UserMenu from '../UserMenu';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleTheme } from '../../redux/theme/themeActions';
import { getTheme } from '../../redux/theme/themeSelectors';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import styles from './Header.module.css';
import animateStyles from './animateStyles.module.css';

const Header = ({ theme, onToggle }) => (
  <>
    <div className={styles.Header}>
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
        <NavLink className={styles.NaviLink} to="/">
          Home
        </NavLink>
        <NavLink className={styles.NaviLink} to="/register">
          Sing up
        </NavLink>
        <NavLink className={styles.NaviLink} to="/login">
          log in
        </NavLink>
      </div>
    </div>
    <UserMenu />
    <div>
      <button
        className={theme ? styles.Button : styles.ButtonDark}
        type="button"
        onClick={() => onToggle()}
      >
        {theme ? 'Dark' : 'Light'}
      </button>
      <p className={theme ? null : styles.TextDark}>
        Active theme {theme ? 'Light' : 'Dark'}
      </p>
    </div>
  </>
);

Header.propTypes = {
  theme: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ theme: getTheme(state) });

const mapDispatchToProps = {
  onToggle: toggleTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
