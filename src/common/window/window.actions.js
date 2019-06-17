import { WINDOW_CONSTANTS } from './window.constants';

export const setPresetPrompt = isOpen => ({
  type: WINDOW_CONSTANTS.PRESET_PROMPT_OPEN,
  payload: isOpen,
});

export const setPresetNameField = val => ({
  type: WINDOW_CONSTANTS.SET_PRESET_NAME_FIELD,
  payload: val,
});

export const showFlashMessage = messageKey => ({
  type: WINDOW_CONSTANTS.SET_FLASH_MESSAGE,
  payload: messageKey,
});

export const clearFlashMessage = () => ({
  type: WINDOW_CONSTANTS.CLEAR_FLASH_MESSAGE,
});

export const setCanInstall = canInstall => ({
  type: WINDOW_CONSTANTS.SET_CAN_INSTALL,
  payload: canInstall,
});
