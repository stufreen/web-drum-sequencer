import { channelsInitialState, channelsReducer } from './channels.reducer';
import { toggleNote } from './channels.actions';

const initialNumNotes = channelsInitialState[0].notes.length;

test('should toggle a note off', () => {
  const state = channelsReducer(channelsInitialState, toggleNote('kick', 1));
  expect(state[0].notes.length).toBe(initialNumNotes - 1);
});

test('should toggle a note on', () => {
  const state = channelsReducer(channelsInitialState, toggleNote('kick', 2));
  expect(state[0].notes.length).toBe(initialNumNotes + 1);
});
