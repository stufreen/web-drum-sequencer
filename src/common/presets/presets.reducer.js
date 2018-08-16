import { PRESETS_CONSTANTS } from './presets.constants';

const presetsInitialState = {
  presetPromptOpen: false,
  presetNameField: '',
  userPresets: [],
};

export const presetsReducer = (state = presetsInitialState, action) => {
  switch (action.type) {
    case PRESETS_CONSTANTS.SAVE_PRESET:
      return {
        ...state,
        userPresets: state.userPresets.map(
          userPreset => (userPreset.id === action.payload.id
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
          userPreset => userPreset.id !== action.payload,
        ),
      };
    case PRESETS_CONSTANTS.PRESET_PROMPT_OPEN:
      return {
        ...state,
        presetPromptOpen: action.payload,
      };
    case PRESETS_CONSTANTS.SET_PRESET_NAME_FIELD:
      return {
        ...state,
        presetNameField: action.payload,
      };
    default:
      return state;
  }
};
