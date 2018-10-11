import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { FlashMessageComponent } from './FlashMessage.component';
import { clearFlashMessage } from '../../common';
import { flashMessageSelectors } from './FlashMessage.selectors';

const mapDispatchToProps = {
  clearFlashMessage,
};

const handlers = withHandlers({
  onDismiss: props => () => {
    const { clearFlashMessage: connectedClearFlashMessage } = props;
    connectedClearFlashMessage();
  },
});

export const FlashMessage = compose(
  connect(flashMessageSelectors, mapDispatchToProps),
  handlers,
)(FlashMessageComponent);
