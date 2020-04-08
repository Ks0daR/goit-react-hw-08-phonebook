const getAutorisate = state => state.auth.token;

const getUserName = state => state.auth.user.name;

export default { getAutorisate, getUserName };
