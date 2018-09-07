import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { ChannelControlsComponent } from './ChannelControls.component';
import { channelControlsSelectors } from './ChannelControls.selectors';
import {
  setChannelGain,
} from '../../common';

const mapDispatchToProps = {
  setChannelGain,
};

const handlers = withHandlers({
  onSetGain: props => (e) => {
    const { setChannelGain: setChannelGainConnected, channel } = props;
    setChannelGainConnected(channel.id, e.target.value / 100);
  },
});

export const ChannelControls = compose(
  connect(channelControlsSelectors, mapDispatchToProps),
  handlers,
)(ChannelControlsComponent);
