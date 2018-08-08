import { notesReducer } from './notes.reducer';
import {
  toggleNote,
  initializeChannelNotes,
  removeChannelNotes,
  setNotes,
} from './notes.actions';

const testNotes = {
  bongo: [
    [
      {
        id: 'bing',
        beat: 1,
      },
      {
        id: 'bong',
        beat: 3,
      },
    ],
    [
      {
        id: 'ping',
        beat: 2,
      },
      {
        id: 'pang',
        beat: 4,
      },
    ],
  ],
};

describe('toggleNote', () => {
  test('should toggle a note off', () => {
    const state = notesReducer(testNotes, toggleNote('bongo', 0, 1));
    expect(state.bongo[0].length).toBe(1);
  });

  test('should toggle a note on', () => {
    const state = notesReducer(testNotes, toggleNote('bongo', 0, 2));
    expect(state.bongo[0].length).toBe(3);
  });

  test('should toggle a note on the second preset on', () => {
    const state = notesReducer(testNotes, toggleNote('bongo', 1, 1));
    expect(state.bongo[1].length).toBe(3);
  });
});

describe('initializeChannel', () => {
  test('should add a channel', () => {
    const state = notesReducer(
      testNotes,
      initializeChannelNotes('cowbell'),
    );
    expect(state.cowbell).not.toBeUndefined();
  });
});

describe('removeChannel', () => {
  test('should remove a channel that exists', () => {
    const state = notesReducer(
      testNotes,
      removeChannelNotes('bongo'),
    );
    expect(state.bongo).toBeUndefined();
  });

  test('should do nothing if no channel matches the ID', () => {
    const state = notesReducer(
      testNotes,
      removeChannelNotes('foobar'),
    );
    expect(state.bongo).not.toBeUndefined();
    expect(state.foobar).toBeUndefined();
  });
});

describe('setNotes', () => {
  test('should replace existing channels', () => {
    const state = notesReducer(
      testNotes,
      setNotes({
        maracas: [
          [],
          [],
        ],
      }),
    );
    expect(state.bongo).toBeUndefined();
    expect(state.maracas).not.toBeUndefined();
  });
});
