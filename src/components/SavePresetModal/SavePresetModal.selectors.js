import { createStructuredSelector } from 'reselect';
import { presetPromptOpenSelector, currentStateSelector } from '../../common';

export const savePresetModalSelectors = createStructuredSelector({
  presetPromptOpen: presetPromptOpenSelector,
  currentState: currentStateSelector,
});
