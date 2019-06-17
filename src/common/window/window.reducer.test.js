import { windowInitialState, windowReducer } from './window.reducer';
import {
  setPresetPrompt,
  showFlashMessage,
  clearFlashMessage,
  setCanInstall,
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
    expect(state.flashMessageVisible).toEqual(true);
  });
});

describe('clearFlashMessage', () => {
  test('should set flashMessageKey to null', () => {
    const state = windowReducer(windowInitialState, showFlashMessage('foobar'));
    const nullState = windowReducer(state, clearFlashMessage());
    expect(nullState.flashMessageKey).toBe('foobar');
    expect(nullState.flashMessageVisible).toEqual(false);
  });
});

describe('setCanInstall', () => {
  test('should set canInstall to a value', () => {
    const state = windowReducer(windowInitialState, setCanInstall(true));
    expect(state.canInstall).toBe(true);
  });
});
