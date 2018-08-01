import {
  playbackSessionInitialState,
  playbackSessionReducer,
} from './playbackSession.reducer';
import {
  startPlayback,
  stopPlayback,
  setBPM,
  setCurrentBeat,
  setStartTime,
} from './playbackSession.actions';
import { LOOKAHEAD } from '../../services/audioEngine.config';

jest.mock('../../services/audioContext.js');

describe('startPlayback', () => {
  test('should set playing to true', () => {
    const state = playbackSessionReducer(playbackSessionInitialState, startPlayback());
    expect(state.playing).toBe(true);
  });

  test('should set startTime to current time plus lookahead', () => {
    const state = playbackSessionReducer(playbackSessionInitialState, startPlayback());
    expect(state.startTime).toBe(1 + LOOKAHEAD);
  });
});

describe('startPlayback', () => {
  test('should set playing to false', () => {
    const state = playbackSessionReducer(playbackSessionInitialState, stopPlayback());
    expect(state.playing).toBe(false);
  });

  test('should set startTime to null', () => {
    const state = playbackSessionReducer(playbackSessionInitialState, stopPlayback());
    expect(state.startTime).toBeNull();
  });
});

describe('setBPM', () => {
  test('should set bpm', () => {
    const state = playbackSessionReducer(playbackSessionInitialState, setBPM(123));
    expect(state.bpm).toBe(123);
  });
});

describe('setCurrentBeat', () => {
  test('should set currentBeat', () => {
    const state = playbackSessionReducer(playbackSessionInitialState, setCurrentBeat(1.1234));
    expect(state.currentBeat).toBe(1.1234);
  });
});

describe('setStartTime', () => {
  test('should set startTime', () => {
    const state = playbackSessionReducer(playbackSessionInitialState, setStartTime(2.1234));
    expect(state.startTime).toBe(2.1234);
  });
});
