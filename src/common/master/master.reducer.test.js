import { masterInitialState, masterReducer } from './master.reducer';
import {
  setPreset,
} from './master.actions';

describe('setPreset', () => {
  test('should change the preset', () => {
    const state = masterReducer(masterInitialState, setPreset('hello'));
    expect(state.preset).toEqual('hello');
  });
});
