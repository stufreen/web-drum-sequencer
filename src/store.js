import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducer from './reducer';

export const configureStore = (callback) => {
  const persistConfig = {
    key: 'root',
    storage,
    version: 0,
    blacklist: ['playbackSession', 'window'],
  };

  const persistedReducer = persistReducer(persistConfig, reducer);

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
  const store = createStore(persistedReducer, composeEnhancers(
    applyMiddleware(thunk),
  ));

  const persistor = persistStore(store, null, callback);

  return {
    store,
    persistor,
  };
};
