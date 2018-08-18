import {
  tempoInitialState,
  tempoReducer,
} from './tempo.reducer';
import { setBPM } from './tempo.actions';

jest.mock('../../presets');

describe('setBPM', () => {
  test('should set bpm', () => {
    const state = tempoReducer(tempoInitialState, setBPM(123));
    expect(state.bpm).toBe(123);
  });
});
