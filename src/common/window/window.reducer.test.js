import { windowInitialState, windowReducer } from './window.reducer';
import {
  setPresetPrompt,
} from './window.actions';

describe('setPresetPrompt', () => {
  test('should set presetPromptOpen to true', () => {
    const state = windowReducer(windowInitialState, setPresetPrompt(true));
    expect(state.presetPromptOpen).toBe(true);
  });
});
