import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { ChannelComponent } from './Channel.component';
import { channelSelectors } from './Channel.selectors';
import {
  loadAndSetChannelSample,
  removeChannel,
  setSelectedChannel,
} from '../../common';
import { playNoteNow } from '../../services/audioScheduler';

const mapDispatchToProps = {
  loadAndSetChannelSample,
  removeChannel,
  setSelectedChannel,
};

const handlers = withHandlers({
  onSelectSample: props => (sample) => {
    const { loadAndSetChannelSample: scs, channel } = props;
    scs(channel.id, sample.value);
  },
  onTouchChannel: props => () => {
    const { channel, setSelectedChannel: sscs } = props;
    sscs(channel.id);
  },
  onPressRemove: props => () => {
    const { channel, removeChannel: rc } = props;
    rc(channel.id);
  },
  onPressHitButton: props => () => {
    const { channel } = props;
    playNoteNow(channel);
  },
});

export const Channel = compose(
  connect(channelSelectors, mapDispatchToProps),
  handlers,
)(ChannelComponent);
