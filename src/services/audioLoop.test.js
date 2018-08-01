import {
  getCurrentBeat,
} from './audioLoop';

jest.mock('./audioContext.js');

describe('getCurrentBeat', () => {
  test('should return beat 1 if startTime is the same as currentTime', () => {
    expect(getCurrentBeat({ bpm: 60, startTime: 1 })).toBe(1);
  });

  test('should return beat 2 if currentTime is one second ahead of startTime and bpm = 60', () => {
    expect(getCurrentBeat({ bpm: 60, startTime: 0 })).toBe(2);
  });

  test('should return beat 3 if currentTime is one second ahead of startTime and bpm = 120', () => {
    expect(getCurrentBeat({ bpm: 120, startTime: 0 })).toBe(3);
  });

  test('should return beat 2.5 if currentTime is one second ahead of startTime and bpm = 90', () => {
    expect(getCurrentBeat({ bpm: 90, startTime: 0 })).toBe(2.5);
  });

  test('should return beat 1 if currentTime is one second ahead of startTime and bpm = 240', () => {
    expect(getCurrentBeat({ bpm: 240, startTime: 0 })).toBe(1);
  });

  test('should return beat 2 if currentTime is one second ahead of startTime and bpm = 300', () => {
    expect(getCurrentBeat({ bpm: 300, startTime: 0 })).toBe(2);
  });
});
