import { createStructuredSelector } from 'reselect';
import { presetSelector } from '../../common';

export const presetSelectorSelectors = createStructuredSelector({
  currentPreset: presetSelector,
});
