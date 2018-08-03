import { channelsInitialState, channelsReducer } from './channels.reducer';
import {
  toggleNote,
  setChannelSample,
  setChannelGain,
  addChannel,
  removeChannel,
} from './channels.actions';

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

describe('setChannelGain', () => {
  test('should change gain for a channel', () => {
    const state = channelsReducer(
      channelsInitialState,
      setChannelGain(channelsInitialState[0].id, 0.5),
    );
    expect(state[0].gain).toEqual(0.5);
  });
});

describe('addChannel', () => {
  test('should add a channel', () => {
    const state = channelsReducer(
      channelsInitialState,
      addChannel(),
    );
    expect(state.length).toEqual(channelsInitialState.length + 1);
  });
});

describe('removeChannel', () => {
  test('should remove a channel that exists', () => {
    const state = channelsReducer(
      channelsInitialState,
      removeChannel(channelsInitialState[0].id),
    );
    expect(state.length).toEqual(channelsInitialState.length - 1);
  });

  test('should do nothing if no channel matches the ID', () => {
    const state = channelsReducer(
      channelsInitialState,
      removeChannel('foo'),
    );
    expect(state.length).toEqual(channelsInitialState.length);
  });
});
