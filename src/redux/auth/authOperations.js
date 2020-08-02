import authActions from './authActions';
import axios from 'axios';

axios.defaults.baseURL = 'https://phonecontactbase.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

const registration = userAccount => dispatch => {
  dispatch(authActions.registrationRequest());

  axios
    .post('/auth/register', userAccount)
    .then(({ data }) => {
      token.set(data.token);
      dispatch(authActions.registrationSuccess(data));
    })
    .catch(({ message }) => dispatch(authActions.registrationError(message)));
};

const logIn = userAccount => dispatch => {
  dispatch(authActions.logInRequest());

  axios
    .post('/auth/login', userAccount)
    .then(({ data }) => {
      token.set(data.token);

      dispatch(authActions.logInSuccess(data));
    })
    .catch(({ message }) => dispatch(authActions.logInError(message)));
};

const logOut = () => dispatch => {
  dispatch(authActions.logOutRequest());

  axios

    .patch('/auth/logout')
    .then(response => {
      token.unset();
      localStorage.clear();

      dispatch(authActions.logOutSuccess());
    })
    .catch(({ message }) => dispatch(authActions.logOutError(message)));
};

const currentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();
  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);

  dispatch(authActions.getCurrentUserRequest());
  axios
    .get('/auth/users/current')
    .then(({ data }) => dispatch(authActions.getCurrentUserSuccess(data)))
    .catch(({ message }) => dispatch(authActions.getCurrentUserError(message)));
};
export default { registration, logIn, logOut, currentUser };
