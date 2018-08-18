import { WINDOW_CONSTANTS } from './window.constants';

export const windowInitialState = {
  presetPromptOpen: false,
};

export const windowReducer = (state = windowInitialState, action) => {
  switch (action.type) {
    case WINDOW_CONSTANTS.PRESET_PROMPT_OPEN:
      return {
        ...state,
        presetPromptOpen: action.payload,
      };
    default:
      return state;
  }
};
