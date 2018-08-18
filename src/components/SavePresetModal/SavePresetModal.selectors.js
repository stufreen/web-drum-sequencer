import { createStructuredSelector } from 'reselect';
import {
  presetPromptOpenSelector,
  currentStateSelector,
  userPresetsSelector,
} from '../../common';

export const savePresetModalSelectors = createStructuredSelector({
  userPresets: userPresetsSelector,
  presetPromptOpen: presetPromptOpenSelector,
  currentState: currentStateSelector,
});
