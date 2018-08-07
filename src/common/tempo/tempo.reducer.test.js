import {
  tempoInitialState,
  tempoReducer,
} from './tempo.reducer';
import { setBPM } from './tempo.actions';

describe('setBPM', () => {
  test('should set bpm', () => {
    const state = tempoReducer(tempoInitialState, setBPM(123));
    expect(state.bpm).toBe(123);
  });
});
