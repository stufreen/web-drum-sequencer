import { masterInitialState, masterReducer } from './master.reducer';
import {
  setPattern,
} from './master.actions';

describe('setPattern', () => {
  test('should change the pattern', () => {
    const state = masterReducer(masterInitialState, setPattern(1));
    expect(state.pattern).toEqual(1);
  });
});
