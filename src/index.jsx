import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
// import runtime from 'serviceworker-webpack-plugin/lib/runtime';
import App from './components/App';
import { initializeAudio } from './services/audioLoop';
import { configureStore } from './store';
import { loadSampleStatefully } from './common';
import { startAnimations } from './services/animations';
import { initializePwaInstall } from './services/pwaInstall';
import { initializeDB } from './services/database';

const { store, persistor } = configureStore();

/**
 * Watch for user going online, and try to load any samples
 * that haven't been loaded (e.g. because user was offline)
 */
window.addEventListener('online', () => {
  const { channels } = store.getState();
  channels.forEach((channel) => {
    if (!channel.sampleLoaded) {
      loadSampleStatefully(store.dispatch, channel);
    }
  });
});

// Register service worker
// if (process.env.__PROD__ && 'serviceWorker' in navigator) { // eslint-disable-line
//   runtime.register();
// }

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);

initializeAudio(store);

startAnimations(store);

initializePwaInstall(store);

initializeDB().then(() => {
  const { channels } = store.getState();
  // Load up all the initial samples
  channels.forEach((channel) => {
    loadSampleStatefully(store.dispatch, channel);
  });
});
