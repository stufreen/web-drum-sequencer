import { PRESETS_CONSTANTS } from './presets.constants';
import defaultPresets from '../../presets';

export const presetsInitialState = {
  userPresets: [],
  preset: defaultPresets[0].name,
};

export const presetsReducer = (state = presetsInitialState, action) => {
  switch (action.type) {
    case PRESETS_CONSTANTS.SET_PRESET:
      return {
        ...state,
        preset: action.payload,
      };
    case PRESETS_CONSTANTS.SAVE_PRESET:
      return {
        ...state,
        userPresets: state.userPresets.map(
          userPreset => (userPreset.name === action.payload.name
            ? action.payload
            : userPreset),
        ),
      };
    case PRESETS_CONSTANTS.SAVE_PRESET_AS:
      return {
        ...state,
        userPresets: [
          ...state.userPresets,
          action.payload,
        ],
      };
    case PRESETS_CONSTANTS.DELETE_PRESET:
      return {
        ...state,
        userPresets: state.userPresets.filter(
          userPreset => userPreset.name !== action.payload,
        ),
      };
    default:
      return state;
  }
};
