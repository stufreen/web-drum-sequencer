import { createStructuredSelector } from 'reselect';
import { patternSelector } from '../../common';

export const patternSelectorSelectors = createStructuredSelector({
  pattern: patternSelector,
});
