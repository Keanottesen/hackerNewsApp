import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable';
import logger from 'redux-logger';
import AsyncStorage from '@react-native-community/async-storage';
import authReducer from './features/authentication/reducers/authenticationReducer';
import signupReducer from './features/signup/reducers/signupReducer';

const persistConfig = {
  transforms: [immutableTransform()],
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['navigation'],
};

const rootReducer = combineReducers({
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  compose(applyMiddleware(thunk, logger)),
);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
