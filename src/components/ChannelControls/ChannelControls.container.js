import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { ChannelControlsComponent } from './ChannelControls.component';
import { channelControlsSelectors } from './ChannelControls.selectors';
import {
  setChannelGain,
  setChannelPitchCoarse,
} from '../../common';

const mapDispatchToProps = {
  setChannelGain,
  setChannelPitchCoarse,
};

const handlers = withHandlers({
  onSetGain: props => (e) => {
    const { setChannelGain: setChannelGainConnected, channel } = props;
    setChannelGainConnected(channel.id, e.target.value / 100);
  },
  onSetChannelPitchCoarse: props => (e) => {
    const { setChannelPitchCoarse: setChannelPitchCoarseConnected, channel } = props;
    setChannelPitchCoarseConnected(channel.id, e.target.value);
  },
});

export const ChannelControls = compose(
  connect(channelControlsSelectors, mapDispatchToProps),
  handlers,
)(ChannelControlsComponent);
