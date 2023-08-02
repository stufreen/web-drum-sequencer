import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { MuteSoloComponent } from './MuteSolo.component';
import {
  setChannelMuted,
  setChannelSolo,
} from '../../common';

const mapDispatchToProps = {
  setChannelMuted,
  setChannelSolo,
};

const handlers = withHandlers({
  onPressMuted: (props) => () => {
    const { channel, setChannelMuted: setChannelMutedConnected } = props;
    setChannelMutedConnected(channel.id, !channel.muted);
  },
  onPressSolo: (props) => () => {
    const { channel, setChannelSolo: setChannelSoloConnected } = props;
    setChannelSoloConnected(channel.id, !channel.solo);
  },
});

export const MuteSolo = compose(
  connect(null, mapDispatchToProps),
  handlers,
)(MuteSoloComponent);
