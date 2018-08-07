import { TEMPO_CONSTANTS } from './tempo.constants';

export const setBPM = val => ({
  type: TEMPO_CONSTANTS.SET_BPM,
  payload: val,
});
