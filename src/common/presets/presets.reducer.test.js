import { presetsInitialState, presetsReducer } from './presets.reducer';
import {
  setPreset,
  savePreset,
  savePresetAs,
  deletePreset,
} from './presets.actions';

jest.mock('../../presets');
jest.mock('../../services/featureChecks');

const testPreset = {
  name: 'Test preset',
  bpm: 120,
};

describe('setPreset', () => {
  test('should change the preset', () => {
    const state = presetsReducer(presetsInitialState, setPreset('hello'));
    expect(state.preset).toEqual('hello');
  });
});

describe('savePresetAs', () => {
  test('should add a new user preset', () => {
    const state = presetsReducer(presetsInitialState, savePresetAs(testPreset));
    expect(state.userPresets.length).toEqual(1);
  });
});

describe('savePreset', () => {
  test('should update a user preset', () => {
    const state = presetsReducer(presetsInitialState, savePresetAs(testPreset));
    expect(state.userPresets.length).toEqual(1);
    expect(state.userPresets[0].bpm).toEqual(120);
    const newState = presetsReducer(state, savePreset({
      name: 'Test preset',
      bpm: 100,
    }));
    expect(newState.userPresets.length).toEqual(1);
    expect(newState.userPresets[0].bpm).toEqual(100);
  });
});

describe('deletePreset', () => {
  test('should add a new user preset', () => {
    const state = presetsReducer(presetsInitialState, savePresetAs(testPreset));
    expect(state.userPresets.length).toEqual(1);
    const newState = presetsReducer(state, deletePreset('Test preset'));
    expect(newState.userPresets.length).toEqual(0);
  });
});
