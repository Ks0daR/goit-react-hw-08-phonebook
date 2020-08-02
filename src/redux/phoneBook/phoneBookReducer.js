import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import phoneBookActions from './phoneBookActions';

const contactsBase = createReducer([], {
  [phoneBookActions.fetchContactsSuccess]: (state, { payload }) => payload,
  [phoneBookActions.addContactSuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [phoneBookActions.removeContactSuccess]: (state, { payload }) =>
    state.filter(element => element._id !== payload),
  [phoneBookActions.clearContactBase]: (state, { payload }) => [],
});

const filter = createReducer('', {
  [phoneBookActions.changeFilter.type]: (state, { payload }) => payload,
});

const loader = createReducer(false, {
  [phoneBookActions.fetchContactsRequest]: () => true,
  [phoneBookActions.fetchContactsSuccess]: () => false,
  [phoneBookActions.fetchContactsError]: () => false,
  [phoneBookActions.addContactRequest]: () => true,
  [phoneBookActions.addContactSuccess]: () => false,
  [phoneBookActions.addContactError]: () => false,
  [phoneBookActions.removeContactRequest]: () => true,
  [phoneBookActions.removeContactSuccess]: () => false,
  [phoneBookActions.removeContactError]: () => false,
});

const error = createReducer(null, {
  [phoneBookActions.fetchContactsError]: (state, { payload }) => payload,
  [phoneBookActions.addContactError]: (state, { payload }) => payload,
  [phoneBookActions.removeContactError]: (state, { payload }) => payload,
});

export default combineReducers({ contactsBase, filter, loader, error });
