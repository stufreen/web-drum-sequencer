import { createStructuredSelector } from 'reselect';
import { presetPromptOpenSelector } from '../../common';

export const savePresetModalSelectors = createStructuredSelector({
  presetPromptOpen: presetPromptOpenSelector,
});
