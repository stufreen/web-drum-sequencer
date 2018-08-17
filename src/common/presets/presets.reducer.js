import { PRESETS_CONSTANTS } from './presets.constants';

const presetsInitialState = {
  presetPromptOpen: false,
  userPresets: [],
};

export const presetsReducer = (state = presetsInitialState, action) => {
  switch (action.type) {
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
