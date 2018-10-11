import { windowInitialState, windowReducer } from './window.reducer';
import {
  setPresetPrompt,
  showFlashMessage,
  clearFlashMessage,
} from './window.actions';

describe('setPresetPrompt', () => {
  test('should set presetPromptOpen to true', () => {
    const state = windowReducer(windowInitialState, setPresetPrompt(true));
    expect(state.presetPromptOpen).toBe(true);
  });
});

describe('showFlashMessage', () => {
  test('should set flashMessageKey to a string value', () => {
    const state = windowReducer(windowInitialState, showFlashMessage('foobar'));
    expect(state.flashMessageKey).toBe('foobar');
  });
});

describe('clearFlashMessage', () => {
  test('should set flashMessageKey to null', () => {
    const state = windowReducer(windowInitialState, showFlashMessage('foobar'));
    const nullState = windowReducer(state, clearFlashMessage());
    expect(nullState.flashMessageKey).toBeNull();
  });
});
