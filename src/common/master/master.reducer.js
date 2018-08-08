import { MASTER_CONSTANTS } from './master.constants';
import presets from '../../presets';

export const masterInitialState = {
  preset: presets[0].name,
  pattern: 0,
};

export const masterReducer = (state = masterInitialState, action) => {
  switch (action.type) {
    case MASTER_CONSTANTS.SET_PRESET:
      return {
        ...state,
        preset: action.payload,
      };
    case MASTER_CONSTANTS.SET_PATTERN:
      return {
        ...state,
        pattern: action.payload,
      };
    default:
      return state;
  }
};
