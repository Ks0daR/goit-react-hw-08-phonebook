const getAutorisate = state => state.auth.token;

const getUserEmail = state => state.auth.user.email;

const getError = state => state.auth.error;

export default { getAutorisate, getUserEmail, getError };
