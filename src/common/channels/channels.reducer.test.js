import { channelsInitialState, channelsReducer } from './channels.reducer';
import { toggleNote, setChannelSample } from './channels.actions';

const initialNumNotes = channelsInitialState[0].notes.length;

describe('toggleNote', () => {
  test('should toggle a note off', () => {
    const state = channelsReducer(channelsInitialState, toggleNote(channelsInitialState[0].id, 1));
    expect(state[0].notes.length).toBe(initialNumNotes - 1);
  });

  test('should toggle a note on', () => {
    const state = channelsReducer(channelsInitialState, toggleNote(channelsInitialState[0].id, 2));
    expect(state[0].notes.length).toBe(initialNumNotes + 1);
  });
});

describe('setChannelSample', () => {
  test('should change a sample', () => {
    const state = channelsReducer(
      channelsInitialState,
      setChannelSample(channelsInitialState[0].id, '/assets/drums/roland-707/snare-1-r1.wav'),
    );
    expect(state[0].sample).toEqual({
      name: 'Snare',
      url: '/assets/drums/roland-707/snare-1-r1.wav',
    });
  });
});
