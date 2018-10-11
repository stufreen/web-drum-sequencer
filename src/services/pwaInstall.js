import { showFlashMessage, FLASH_MESSAGES } from '../common';

let deferredPrompt;

export const initializePwaInstall = (store) => {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;

    setTimeout(() => {
      store.dispatch(showFlashMessage(FLASH_MESSAGES.INSTALL_PWA));
    }, 30000); // Wait 30 seconds until bugging the user to install
  });
};

export const promptToInstall = () => {
  if (typeof deferredPrompt !== 'undefined') {
    deferredPrompt.prompt();
  }
};
