import * as R from 'ramda';
import { getAudioContext } from './audioContext';
import { LOOKAHEAD } from './audioEngine.config';
import { loadSamples, sampleStore } from './sampleStore';
import { setStartTime, setCurrentBeat } from '../common';

// schedule is a lookup table of all the notes currently scheduled to be played
const schedule = {};

const scheduleNote = (noteId, sampleId, noteTime) => {
  if (typeof schedule[noteId] === 'undefined') {
    const source = getAudioContext().createBufferSource();
    source.buffer = sampleStore[sampleId];
    source.connect(getAudioContext().destination);
    source.start(noteTime);
    schedule[noteId] = source;
  }
};

const isBetween = (query, a, b) => query >= a && query < b;

const scheduleChannel = (channel, state) => {
  if (typeof channel.notes !== 'undefined') {
    // Calculate timing
    const bpm = R.path(['playbackSession', 'bpm'], state);
    const startTime = R.path(['playbackSession', 'startTime'], state);
    const { currentTime } = getAudioContext();
    const barLength = 4 * (60 / bpm);
    const barEnd = startTime + barLength;

    // Check if the notes should be scheduled
    channel.notes.forEach((note) => {
      const noteTime = startTime + ((note.beat - 1) * 60 / bpm);
      if (isBetween(noteTime, currentTime, currentTime + LOOKAHEAD)) {
        scheduleNote(note.id, channel.id, noteTime);
      } else if (currentTime + LOOKAHEAD >= barEnd) {
        const bufferNoteTime = noteTime + barLength;
        if (isBetween(bufferNoteTime, currentTime, currentTime + LOOKAHEAD)) {
          scheduleNote(note.id, channel.id, bufferNoteTime);
        }
      } else {
        // Clear out irrelevant notes
        delete schedule[note.id];
      }
    });
  }
};

const tick = (store) => {
  const state = store.getState();

  // Don't do anything if user hasn't pressed play
  if (!R.path(['playbackSession', 'playing'], state)) {
    return;
  }

  // Calculate timing
  const bpm = R.path(['playbackSession', 'bpm'], state);
  const startTime = R.path(['playbackSession', 'startTime'], state);
  const { currentTime } = getAudioContext();
  const currentBeat = (currentTime - startTime) * (bpm / 60) + 1;

  // Loop playback if we reached the end of the bar
  if (currentBeat >= 5) {
    const barLength = 4 * (60 / bpm);
    store.dispatch(setStartTime(startTime + barLength));
  }

  // Schedule notes in each channel
  state.channels.forEach((channel) => {
    scheduleChannel(channel, state);
  });

  // Dispatch action to redux to update transport
  store.dispatch(setCurrentBeat(currentBeat));
};

export const initializeAudioScheduler = (store) => {
  getAudioContext(); // Start the clock
  loadSamples(store)
    .then(() => {
      // Start the loop!!!
      setInterval(() => {
        tick(store);
      }, 25);
    });
};
