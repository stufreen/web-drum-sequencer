import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducer from './reducer';

export const configureStore = (callback) => {
  const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['playbackSession', 'window'],
  };

  const persistedReducer = persistReducer(persistConfig, reducer);

  const store = createStore(persistedReducer, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line
  ));

  const persistor = persistStore(store, null, callback);

  return {
    store,
    persistor,
  };
};
