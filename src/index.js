import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import { initializeAudio } from './services/audioLoop';
import { store } from './store';
import '@vaadin/vaadin-dropdown-menu/vaadin-dropdown-menu';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

initializeAudio(store);
