import { WINDOW_CONSTANTS } from './window.constants';

export const setPresetPrompt = isOpen => ({
  type: WINDOW_CONSTANTS.PRESET_PROMPT_OPEN,
  payload: isOpen,
});

export const setPresetNameField = val => ({
  type: WINDOW_CONSTANTS.SET_PRESET_NAME_FIELD,
  payload: val,
});
