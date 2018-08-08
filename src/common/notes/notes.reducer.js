import { uuid } from '../../services/uuid';
import presets from '../../presets';
import { EMPTY_NOTE_ROW } from '../../presets/empty';
import { NOTES_CONSTANTS } from './notes.constants';

export const notesInitialState = presets[0].notes;

// Returns a new noteAr clone with a note at beat either added or removed
const toggleNote = (noteAr, beat) => {
  if (noteAr.find(note => note.beat === beat)) {
    return noteAr.filter(note => note.beat !== beat);
  }
  return [
    ...noteAr,
    {
      beat,
      id: uuid(),
    },
  ];
};

// Returns new state object with note at beat on pattern toggled
const toggleNoteState = (state, { channelID, pattern, beat }) => ({
  ...state,
  [channelID]: state[channelID].map((noteAr, patternIndex) => {
    if (patternIndex === pattern) {
      // This is the active pattern
      return toggleNote(noteAr, beat);
    }
    return noteAr; // Do nothing to other patterns
  }),
});

export const notesReducer = (state = notesInitialState, action) => {
  switch (action.type) {
    case NOTES_CONSTANTS.TOGGLE_NOTE:
      return toggleNoteState(state, action.payload);
    case NOTES_CONSTANTS.INITIALIZE_CHANNEL:
      return {
        ...state,
        [action.payload]: EMPTY_NOTE_ROW, // TO DO: add empty array for each pattern
      };
    case NOTES_CONSTANTS.REMOVE_CHANNEL:
      return {
        ...state,
        [action.payload]: undefined,
      };
    case NOTES_CONSTANTS.SET_NOTES:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};
