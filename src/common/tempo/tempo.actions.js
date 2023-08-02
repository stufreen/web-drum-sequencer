import { TEMPO_CONSTANTS } from './tempo.constants';

export const setBPM = (val) => ({
  type: TEMPO_CONSTANTS.SET_BPM,
  payload: val,
});

export const setSwing = (val) => ({
  type: TEMPO_CONSTANTS.SET_SWING,
  payload: val,
});
