import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import runtime from 'serviceworker-webpack-plugin/lib/runtime';
import App from './components/App';
import { initializeAudio } from './services/audioLoop';
import { configureStore } from './store';
import { loadSamples } from './services/sampleStore';
import './assets/js/webaudio-controls';

const { store, persistor } = configureStore(() => {
  loadSamples(store);
});

if ('serviceWorker' in navigator) {
  runtime.register();
}

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);

initializeAudio(store);
