import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { ChannelComponent } from './Channel.component';
import { channelSelectors } from './Channel.selectors';
import {
  loadAndSetChannelSample,
  setChannelGain,
  removeChannel,
  setSelectedChannel,
} from '../../common';

const mapDispatchToProps = {
  loadAndSetChannelSample,
  setChannelGain,
  removeChannel,
  setSelectedChannel,
};

const handlers = withHandlers({
  onSelectSample: props => (sample) => {
    const { loadAndSetChannelSample: scs, channel } = props;
    scs(channel.id, sample.value);
  },
  onSetGain: props => (e) => {
    const { setChannelGain: scg, channel } = props;
    scg(channel.id, e.target.value / 100);
  },
  onPressRemove: props => () => {
    const { channel, removeChannel: rc } = props;
    rc(channel.id);
  },
});

export const Channel = compose(
  connect(channelSelectors, mapDispatchToProps),
  handlers,
)(ChannelComponent);
