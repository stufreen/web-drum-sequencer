import { masterInitialState, masterReducer } from './master.reducer';
import {
  setPreset,
  setPattern,
} from './master.actions';

describe('setPreset', () => {
  test('should change the preset', () => {
    const state = masterReducer(masterInitialState, setPreset('hello'));
    expect(state.preset).toEqual('hello');
  });
});

describe('setPattern', () => {
  test('should change the pattern', () => {
    const state = masterReducer(masterInitialState, setPattern(1));
    expect(state.pattern).toEqual(1);
  });
});
