import { createStructuredSelector } from 'reselect';
import { swingSelector } from '../../common';

export const swingControlSelectors = createStructuredSelector({
  swing: swingSelector,
});
