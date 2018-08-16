import { createStructuredSelector, createSelector } from 'reselect';
import * as R from 'ramda';
import {
  presetSelector,
  channelsSelector,
  notesSelector,
  bpmSelector,
} from '../../common';
import presets from '../../presets';

const compareChannels = (presetChannels, activeChannels) => {
  const activeChannelsStripped = activeChannels.map(
    activeChannel => R.omit(['sampleLoaded'], activeChannel),
  );
  return R.equals(presetChannels, activeChannelsStripped);
};

const currentPresetSelector = createSelector(
  presetSelector,
  presetName => presets.find(preset => preset.name === presetName),
);

const isEditedSelector = createSelector(
  currentPresetSelector,
  channelsSelector,
  notesSelector,
  bpmSelector,
  (preset, channels, notes, bpm) => !(compareChannels(preset.channels, channels)
      && R.equals(preset.notes, notes)
      && preset.bpm === bpm),
);

export const presetSelectorSelectors = createStructuredSelector({
  isEdited: isEditedSelector,
  currentPreset: currentPresetSelector,
  presetName: presetSelector,
});
