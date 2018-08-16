import { createStructuredSelector, createSelector } from 'reselect';
import * as R from 'ramda';
import {
  presetSelector,
  channelsSelector,
  notesSelector,
  bpmSelector,
  userPresetsSelector,
} from '../../common';
import presets from '../../presets';

const currentStateSelector = createSelector(
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

// presetSelector returns the preset name - this will get the whole preset object
const currentPresetSelector = createSelector(
  presetSelector,
  userPresetsSelector,
  (presetName, userPresets) => [...presets, ...userPresets].find(
    preset => preset.name === presetName,
  ),
);

// Indicates if the preset is a "stock" preset or has been modified by user (not saved)
const isEditedSelector = createSelector(
  currentPresetSelector,
  currentStateSelector,
  (preset, currentState) => !R.equals(R.omit(['name'], preset), currentState),
);

export const presetSelectorSelectors = createStructuredSelector({
  isEdited: isEditedSelector,
  currentPreset: currentPresetSelector,
  userPresets: userPresetsSelector,
  notes: notesSelector,
  currentState: currentStateSelector,
});
