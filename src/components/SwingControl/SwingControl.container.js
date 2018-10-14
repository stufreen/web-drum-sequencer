import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { SwingControlComponent } from './SwingControl.component';
import { swingControlSelectors } from './SwingControl.selectors';
import { setSwing } from '../../common';

const mapDispatchToProps = { setSwing };

const handlers = withHandlers({
  onSetSwing: props => (e) => {
    const { setSwing: setSwingConnected } = props;
    setSwingConnected(e.target.value);
  },
});

export const SwingControl = compose(
  connect(swingControlSelectors, mapDispatchToProps),
  handlers,
)(SwingControlComponent);
