import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from './authActions';

const userAcount = { name: '', email: '' };

const user = createReducer(userAcount, {
  [authActions.registrationSuccess]: (state, { payload }) => payload.user,
  [authActions.logInSuccess]: (state, { payload }) => payload.user,
  [authActions.logOutSuccess]: (state, { payload }) => userAcount,
  [authActions.getCurrentUserSuccess]: (state, { payload }) => payload,
});

const token = createReducer(null, {
  [authActions.registrationSuccess]: (state, { payload }) => payload.token,
  [authActions.logInSuccess]: (state, { payload }) => payload.token,
  [authActions.logOutSuccess]: (state, { payload }) => null,
  [authActions.getCurrentUserSuccess]: (state, { payload }) => payload.token,
});

const errorAuth = createReducer(null, {
  [authActions.getCurrentUserError]: (state, { payload }) => payload,
  [authActions.logInError]: (state, { payload }) => payload,
  [authActions.logOutError]: (state, { payload }) => payload,
  [authActions.registrationError]: (state, { payload }) => payload,
});

export default combineReducers({
  user,
  token,
  errorAuth,
});
