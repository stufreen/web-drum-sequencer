import { TEMPO_CONSTANTS } from './tempo.constants';
import presets from '../../presets';

export const tempoInitialState = {
  bpm: presets[0].bpm,
};

export const tempoReducer = (state = tempoInitialState, action) => {
  switch (action.type) {
    case TEMPO_CONSTANTS.SET_BPM:
      return {
        ...state,
        bpm: action.payload,
      };
    default:
      return state;
  }
};
