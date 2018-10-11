import { createStructuredSelector } from 'reselect';
import { flashMessageKeySelector, flashMessageVisibleSelector } from '../../common';

export const flashMessageSelectors = createStructuredSelector({
  messageKey: flashMessageKeySelector,
  flashMessageVisible: flashMessageVisibleSelector,
});
