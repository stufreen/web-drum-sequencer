import { PRESETS_CONSTANTS } from './presets.constants';

export const savePreset = preset => ({
  type: PRESETS_CONSTANTS.SAVE_PRESET,
  payload: preset,
});

export const savePresetAs = preset => ({
  type: PRESETS_CONSTANTS.SAVE_PRESET_AS,
  payload: preset,
});

export const deletePreset = presetID => ({
  type: PRESETS_CONSTANTS.DELETE_PRESET,
  payload: presetID,
});
