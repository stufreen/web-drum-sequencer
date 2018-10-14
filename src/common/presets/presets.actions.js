import { setBPM, setSwing } from '../tempo';
import { loadChannels } from '../channels';
import { setPattern, setSelectedChannel } from '../master';
import { PRESETS_CONSTANTS } from './presets.constants';
import presets from '../../presets';

export const setPreset = presetName => ({
  type: PRESETS_CONSTANTS.SET_PRESET,
  payload: presetName,
});

export const savePreset = preset => ({
  type: PRESETS_CONSTANTS.SAVE_PRESET,
  payload: preset,
});

export const savePresetAs = preset => ({
  type: PRESETS_CONSTANTS.SAVE_PRESET_AS,
  payload: preset,
});

export const deletePreset = presetName => ({
  type: PRESETS_CONSTANTS.DELETE_PRESET,
  payload: presetName,
});

export const loadPreset = preset => (dispatch) => {
  dispatch(setBPM(preset.bpm));
  dispatch(setSwing(preset.swing));
  dispatch(loadChannels(preset.channels, preset.notes));
  dispatch(setPreset(preset.name));
  dispatch(setPattern(0));
  dispatch(setSelectedChannel(preset.channels[0].id));
};

export const erasePreset = presetName => (dispatch) => {
  dispatch(setBPM(presets[0].bpm));
  dispatch(setSwing(presets[0].swing));
  dispatch(loadChannels(presets[0].channels, presets[0].notes));
  dispatch(setPreset(presets[0].name));
  dispatch(setPattern(0));
  dispatch(setSelectedChannel(presets[0].channels[0].id));
  dispatch(deletePreset(presetName));
};
