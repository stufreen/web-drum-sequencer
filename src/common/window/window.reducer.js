import { WINDOW_CONSTANTS } from './window.constants';

const presetsInitialState = {
  presetPromptOpen: false,
  presetNameField: '',
};

export const windowReducer = (state = presetsInitialState, action) => {
  switch (action.type) {
    case WINDOW_CONSTANTS.PRESET_PROMPT_OPEN:
      return {
        ...state,
        presetPromptOpen: action.payload,
      };
    case WINDOW_CONSTANTS.SET_PRESET_NAME_FIELD:
      return {
        ...state,
        presetNameField: action.payload,
      };
    default:
      return state;
  }
};
