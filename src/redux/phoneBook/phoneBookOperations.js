import axios from 'axios';
import phoneBookActions from './phoneBookActions';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

const addContact = (name, number) => dispatch => {
  dispatch(phoneBookActions.addContactRequest());

  axios
    .post('/contacts', { name, number })
    .then(({ data }) => dispatch(phoneBookActions.addContactSuccess(data)))
    .catch(error => dispatch(phoneBookActions.addContactError(error)));
};

const removeContact = contactId => dispatch => {
  dispatch(phoneBookActions.removeContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(phoneBookActions.removeContactSuccess(contactId)))
    .catch(error => dispatch(phoneBookActions.removeContactError(error)));
};

const fetchContacts = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();
  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  dispatch(phoneBookActions.fetchContactsRequest());
  axios
    .get('/contacts')
    .then(({ data }) => dispatch(phoneBookActions.fetchContactsSuccess(data)))
    .catch(error => dispatch(phoneBookActions.fetchContactsError(error)));
};

export default { addContact, removeContact, fetchContacts };
