import { setCanInstall } from '../common';

let deferredPrompt;

export const initializePwaInstall = (store) => {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    store.dispatch(setCanInstall(true));
  });

  window.addEventListener('appinstalled', () => {
    store.dispatch(setCanInstall(false));
  });
};

export const promptToInstall = () => {
  if (typeof deferredPrompt !== 'undefined') {
    deferredPrompt.prompt();
  }
};
