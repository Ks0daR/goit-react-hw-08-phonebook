import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from './authActions';

const userAcount = { name: '', email: '' };

const user = createReducer(null, {
  [authActions.registrationSuccess]: (state, { payload }) => payload.user,
  [authActions.logInSuccess]: (state, { payload }) => payload.user,
  [authActions.logOutSuccess]: (state, { payload }) => userAcount,
});

const token = createReducer(null, {
  [authActions.registrationSuccess]: (state, { payload }) => payload.token,
  [authActions.logInSuccess]: (state, { payload }) => payload.token,
  [authActions.logOutSuccess]: (state, { payload }) => null,
});

export default combineReducers({
  user,
  token,
});
