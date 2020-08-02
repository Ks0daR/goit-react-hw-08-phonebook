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

const addContact = userContact => dispatch => {
  dispatch(phoneBookActions.addContactRequest());

  axios
    .post('/api/contacts', userContact)
    .then(({ data }) => dispatch(phoneBookActions.addContactSuccess(data)))
    .catch(({ message }) =>
      dispatch(phoneBookActions.addContactError(message)),
    );
};

const removeContact = contactId => dispatch => {
  dispatch(phoneBookActions.removeContactRequest());

  axios
    .delete(`/api/contacts/${contactId}`)
    .then(() => dispatch(phoneBookActions.removeContactSuccess(contactId)))
    .catch(({ message }) =>
      dispatch(phoneBookActions.removeContactError(message)),
    );
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
    .get('/api/contacts')
    .then(({ data }) => dispatch(phoneBookActions.fetchContactsSuccess(data)))
    .catch(({ message }) =>
      dispatch(phoneBookActions.fetchContactsError(message)),
    );
};

export default { addContact, removeContact, fetchContacts };
