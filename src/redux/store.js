import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './theme/themeReduser';
import phoneBookReducer from './phoneBook/phoneBookReducer';
import { authReducers } from './auth';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    contacts: phoneBookReducer,
    auth: persistReducer(authPersistConfig, authReducers),
  },
});

export const persistor = persistStore(store);
