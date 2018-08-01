import {
  isBetween,
} from './audioScheduler';

jest.mock('./audioContext');

test('isBetween should return true if query is between a and b', () => {
  expect(isBetween(2, 1, 3)).toBe(true);
});

test('isBetween should return false if query is note between a and b', () => {
  expect(isBetween(4, 1, 3)).toBe(false);
});

test('scheduleNote should play a new note if nothing is scheduled', () => {
  expect(scheduleNote('noteId', 'kick', 1)).toBe(false);
});
