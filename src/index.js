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

const { store, persistor } = configureStore(() => {
  const { channels } = store.getState();
  channels.forEach((channel) => {
    loadSampleStatefully(store.dispatch, channel);
  });
});

window.addEventListener('online', () => {
  const { channels } = store.getState();
  channels.forEach((channel) => {
    if (!channel.sampleLoaded) {
      loadSampleStatefully(store.dispatch, channel);
    }
  });
});

// if ('serviceWorker' in navigator) {
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
