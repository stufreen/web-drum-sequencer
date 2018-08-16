import { PRESETS_CONSTANTS } from './presets.constants';
import { uuid } from '../../services/uuid';

export const savePreset = preset => ({
  type: PRESETS_CONSTANTS.SAVE_PRESET,
  payload: preset,
});

export const savePresetAs = preset => ({
  type: PRESETS_CONSTANTS.SAVE_PRESET_AS,
  payload: {
    ...preset,
    name: uuid(),
  },
});

export const deletePreset = presetID => ({
  type: PRESETS_CONSTANTS.DELETE_PRESET,
  payload: presetID,
});

export const setPresetPrompt = isOpen => ({
  type: PRESETS_CONSTANTS.PRESET_PROMPT_OPEN,
  payload: isOpen,
});

export const setPresetNameField = val => ({
  type: PRESETS_CONSTANTS.SET_PRESET_NAME_FIELD,
  payload: val,
});
