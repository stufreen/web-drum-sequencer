import * as R from 'ramda';
import { createSelector } from 'reselect';
import { channelsSelector } from '../channels';
import { notesSelector } from '../notes';
import { bpmSelector } from '../tempo';

export const userPresetsSelector = R.path(['presets', 'userPresets']);

export const currentStateSelector = createSelector(
  channelsSelector,
  notesSelector,
  bpmSelector,
  (channels, notes, bpm) => ({
    notes,
    bpm,
    channels: channels.map(
      channel => R.omit(['sampleLoaded'], channel),
    ),
  }),
);
