import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { ChannelControlsComponent } from './ChannelControls.component';
import { channelControlsSelectors } from './ChannelControls.selectors';
import {
  setChannelGain,
  setChannelPitchCoarse,
  setChannelPan,
  setChannelReverb,
} from '../../common';

const mapDispatchToProps = {
  setChannelGain,
  setChannelPan,
  setChannelPitchCoarse,
  setChannelReverb,
};

const handlers = withHandlers({
  onSetGain: props => (e) => {
    const { setChannelGain: setChannelGainConnected, channel } = props;
    setChannelGainConnected(channel.id, e.target.value / 100);
  },
  onSetPan: props => (e) => {
    const { setChannelPan: setChannelPanConnected, channel } = props;
    setChannelPanConnected(channel.id, e.target.value);
  },
  onSetChannelPitchCoarse: props => (e) => {
    const { setChannelPitchCoarse: setChannelPitchCoarseConnected, channel } = props;
    setChannelPitchCoarseConnected(channel.id, e.target.value);
  },
  onSetReverb: props => (e) => {
    const { setChannelReverb: setChannelReverbConnected, channel } = props;
    setChannelReverbConnected(channel.id, e.target.value);
  },
});

export const ChannelControls = compose(
  connect(channelControlsSelectors, mapDispatchToProps),
  handlers,
)(ChannelControlsComponent);
