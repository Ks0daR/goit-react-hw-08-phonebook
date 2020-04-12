import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import themeReducer from './theme/themeReduser';
import phoneBookReducer from './phoneBook/phoneBookReducer';
import { authReducers } from './auth';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
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
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);
