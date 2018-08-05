import {
  isBetween,
  getChannelNotes,
  getNotes,
} from './audioScheduler';
import { channelsInitialState } from '../common/channels';

describe('isBetween', () => {
  test('should return true if query is between a and b', () => {
    expect(isBetween(2, 1, 3)).toBe(true);
  });

  test('should return false if query is note between a and b', () => {
    expect(isBetween(4, 1, 3)).toBe(false);
  });
});

describe('getChannelNotes', () => {
  const notes = getChannelNotes(
    channelsInitialState[0], // kick channel
    60,
    0,
    1,
  );

  test('should return same number of notes', () => {
    expect(notes.length).toBe(channelsInitialState[0].notes.length);
  });

  test('should calculate noteTime correctly for notes in the lookahead period', () => {
    expect(notes[0].time).toBe(0);
  });

  test('should set noteTime to null if note should not be scheduled', () => {
    expect(notes[1].time).toBeNull();
  });
});

// TO DO: Add tests for getNotes
describe('getNotes', () => {
  const notes = getNotes(
    channelsInitialState, // kick channel
    60,
    0,
    1,
  );

  test('should return same number of notes as initial state', () => {
    const totalNotes = channelsInitialState.reduce(
      (count, channel) => count + channel.notes.length,
      0,
    );

    expect(notes.length).toBe(totalNotes);
  });
});
