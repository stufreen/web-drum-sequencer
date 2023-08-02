import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer, createMigrate } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducer from './reducer';

const migrations = {
  1: () => ({}),
  2: () => ({}),
  3: () => ({}),
};

export const configureStore = (callback) => {
  const persistConfig = {
    key: 'root-v1.0.0',
    storage,
    version: 3,
    blacklist: ['playbackSession', 'window'],
    migrate: createMigrate(migrations, { debug: import.meta.env.DEV }), // eslint-disable-line
  };

  const persistedReducer = persistReducer(persistConfig, reducer);

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
  const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk)),
  );

  const persistor = persistStore(store, null, callback);

  return {
    store,
    persistor,
  };
};
