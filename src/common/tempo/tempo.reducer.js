import { TEMPO_CONSTANTS } from './tempo.constants';
import presets from '../../presets';

export const tempoInitialState = {
  bpm: presets[1].bpm,
  swing: 0.5,
};

export const tempoReducer = (state = tempoInitialState, action) => {
  switch (action.type) {
    case TEMPO_CONSTANTS.SET_BPM:
      return {
        ...state,
        bpm: action.payload,
      };
    case TEMPO_CONSTANTS.SET_SWING:
      return {
        ...state,
        swing: action.payload,
      };
    default:
      return state;
  }
};
