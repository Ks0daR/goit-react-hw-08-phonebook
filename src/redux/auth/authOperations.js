import authActions from './authActions';
import axios from 'axios';

axios.defaults.baseURL = 'https://phonecontactbase.herokuapp.com';

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
  console.log(userAccount);

  axios
    .post('/auth/register', userAccount)
    .then(({ data }) => {
      token.set(data.token);
      dispatch(authActions.registrationSuccess(data));
    })
    .catch(error => dispatch(authActions.registrationError(error)));
};

const logIn = userAccount => dispatch => {
  dispatch(authActions.logInRequest());

  axios
    .post('/auth/login', userAccount)
    .then(({ data }) => {
      token.set(data.token);
      dispatch(authActions.logInSuccess(data));
    })
    .catch(error => dispatch(authActions.logInError(error)));
};

const logOut = () => dispatch => {
  dispatch(authActions.logOutRequest());

  axios
    .post('/auth/logout')
    .then(response => {
      token.unset();
      localStorage.clear();
      dispatch(authActions.logOutSuccess());
    })
    .catch(error => dispatch(authActions.logOutError));
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
    .catch(error => dispatch(authActions.getCurrentUserError(error)));
};
export default { registration, logIn, logOut, currentUser };
