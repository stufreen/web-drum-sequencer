import {
  getCurrentBeat,
} from './audioContext';

jest.mock('./featureChecks');

describe('getCurrentBeat', () => {
  test('should return beat 1 if startTime is the same as currentTime', () => {
    expect(getCurrentBeat(60, 1, 1)).toBe(1);
  });

  test('should return beat 2 if currentTime is one second ahead of startTime and bpm = 60', () => {
    expect(getCurrentBeat(60, 0, 1)).toBe(2);
  });

  test('should return beat 3 if currentTime is one second ahead of startTime and bpm = 120', () => {
    expect(getCurrentBeat(120, 0, 1)).toBe(3);
  });

  test('should return beat 2.5 if currentTime is one second ahead of startTime and bpm = 90', () => {
    expect(getCurrentBeat(90, 0, 1)).toBe(2.5);
  });

  test('should return beat 1 if currentTime is one second ahead of startTime and bpm = 240', () => {
    expect(getCurrentBeat(240, 0, 1)).toBe(1);
  });

  test('should return beat 2 if currentTime is one second ahead of startTime and bpm = 300', () => {
    expect(getCurrentBeat(300, 0, 1)).toBe(2);
  });
});
