import {
  tempoInitialState,
  tempoReducer,
} from './tempo.reducer';
import { setBPM, setSwing } from './tempo.actions';

jest.mock('../../presets');

describe('setBPM', () => {
  test('should set bpm', () => {
    const state = tempoReducer(tempoInitialState, setBPM(123));
    expect(state.bpm).toBe(123);
  });
});

describe('setSwing', () => {
  test('should set swing', () => {
    const state = tempoReducer(tempoInitialState, setSwing(0.4));
    expect(state.swing).toBe(0.4);
  });
});
