import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from './authActions';

const userAcount = { name: '', email: '' };

const user = createReducer(null, {
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

export default combineReducers({
  user,
  token,
});
