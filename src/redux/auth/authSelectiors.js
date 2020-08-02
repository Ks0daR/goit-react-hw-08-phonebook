const getAutorisate = state => state.auth.token;

const getUserEmail = state => state.auth.user.email;

const getUserAvatar = state => state.auth.user.avatarURL;

const getError = state => state.auth.error;

export default { getAutorisate, getUserEmail, getUserAvatar, getError };
