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

export const getChannelNotes = (channel, bpm, startTime, currentBeat) => channel.notes.filter(
  (note) => {
    const lookaheadBeats = LOOKAHEAD * (60 / bpm);
    const noteTime = startTime + ((note.beat - 1) * 60 / bpm);
    if (isBetween(note.beat, currentBeat, currentBeat + lookaheadBeats)
      || isBetween(note.beat, currentBeat - 4, currentBeat + lookaheadBeats - 4)) {
      return {
        id: note.id,
        channel: channel.id,
        time: noteTime,
      };
    }
    return {
      id: note.id,
      channel: channel.id,
      time: null,
    };
  },
);

export const getNotes = (channels, bpm, startTime, currentBeat) => channels.reduce(
  (accumulator, channel) => [
    ...accumulator,
    ...getChannelNotes(channel, bpm, startTime, currentBeat),
  ], [],
);

export const scheduleNotes = ({ bpm, startTime }, channels, currentBeat) => {
  // Determine which notes need to be scheduled
  const notes = getNotes(channels, bpm, startTime, currentBeat);

  // Schedule the notes
  notes.forEach((note) => {
    if (note.time !== null) {
      scheduleNote(note.id, note.channel, note.time);
    } else {
      delete schedule[note.id];
    }
  });
};
