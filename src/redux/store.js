import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './theme/themeReduser';
import phoneBookReducer from './phoneBook/phoneBookReducer';
import { authReducers } from './auth';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    contacts: phoneBookReducer,
    auth: authReducers,
  },
});

export default store;
