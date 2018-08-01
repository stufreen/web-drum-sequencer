import { LOOKAHEAD } from './audioEngine.config';
import { playNote } from './audioContext';
import { sampleStore } from './sampleStore';

// schedule is a lookup table of all the notes currently scheduled to be played
const schedule = {};

export const scheduleNote = (noteId, sampleId, noteTime) => {
  if (typeof schedule[noteId] === 'undefined') {
    schedule[noteId] = playNote(noteTime, sampleStore[sampleId]);
  }
};

export const isBetween = (query, a, b) => query >= a && query < b;

export const scheduleChannel = ({
  channel,
  bpm,
  startTime,
  currentBeat,
}) => {
  const lookaheadBeats = LOOKAHEAD * (60 / bpm);
  channel.notes.forEach((note) => {
    const noteTime = startTime + ((note.beat - 1) * 60 / bpm);
    if (isBetween(note.beat, currentBeat, currentBeat + lookaheadBeats)) {
      scheduleNote(note.id, channel.id, noteTime);
    } else if (isBetween(note.beat, currentBeat - 4, currentBeat + lookaheadBeats - 4)) {
      scheduleNote(note.id, channel.id, noteTime);
    } else {
      delete schedule[note.id];
    }
  });
};

export const scheduleNotes = ({ bpm, startTime }, channels, currentBeat) => {
  channels.forEach((channel) => {
    scheduleChannel({
      channel,
      bpm,
      startTime,
      currentBeat,
    });
  });
};
