import * as R from 'ramda';
import { createSelector } from 'reselect';
import { channelsSelector } from '../channels';
import { notesSelector } from '../notes';
import { bpmSelector, swingSelector } from '../tempo';

export const userPresetsSelector = R.path(['presets', 'userPresets']);

export const presetSelector = R.path(['presets', 'preset']);

export const currentStateSelector = createSelector(
  channelsSelector,
  notesSelector,
  bpmSelector,
  swingSelector,
  (channels, notes, bpm, swing) => ({
    notes,
    bpm,
    swing,
    channels: channels.map(
      (channel) => R.omit(['sampleLoaded'], channel),
    ),
  }),
);
