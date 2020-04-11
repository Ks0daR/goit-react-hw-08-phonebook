import { createReducer } from '@reduxjs/toolkit';
import themeActions from './themeActions';

const theme = createReducer(true, {
  [themeActions.toggleTheme]: state => !state,
});

export default theme;
