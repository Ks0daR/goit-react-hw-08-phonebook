const getAutorisate = state => state.auth.token;

const getUserEmail = state => state.auth.user.email;

export default { getAutorisate, getUserEmail };
