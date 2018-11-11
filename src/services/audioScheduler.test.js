import {
  isBetween,
  getScheduledNotes,
} from './audioScheduler';

jest.mock('./featureChecks');
jest.mock('./audioContext');

describe('isBetween', () => {
  test('should return true if query is between a and b', () => {
    expect(isBetween(2, 1, 3)).toBe(true);
  });

  test('should return false if query is note between a and b', () => {
    expect(isBetween(4, 1, 3)).toBe(false);
  });
});

describe('getScheduledNotes', () => {
  const testNotes = [
    {
      beat: 1,
      id: 'foo',
    },
    {
      beat: 2.5,
      id: 'bar',
    },
    {
      beat: 4.25,
      id: 'bam',
    },
  ];

  const scheduledNotes = getScheduledNotes({
    channel: {
      sample: {
        url: '/whatever.wav',
      },
    },
    channelNotes: testNotes,
    tempo: {
      bpm: 60,
      swing: 0.2,
    },
    startTime: 0,
    currentBeat: 1,
  });

  test('should return same number of notes', () => {
    expect(scheduledNotes.length).toBe(testNotes.length);
  });

  test('should calculate noteTime correctly for notes in the lookahead period', () => {
    expect(scheduledNotes[0].time).toBe(0);
  });

  test('should set noteTime to null if note should not be scheduled', () => {
    expect(scheduledNotes[1].time).toBeNull();
  });
});
