import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { ChannelComponent } from './Channel.component';
import { channelSelectors } from './Channel.selectors';
import { setChannelSample, setChannelGain } from '../../common';

const mapDispatchToProps = {
  setChannelSample,
  setChannelGain,
};

const handlers = withHandlers({
  onSelectSample: props => (sample) => {
    const { setChannelSample: scs, channel } = props;
    scs(channel.id, sample.value);
  },
  onSetGain: props => (e) => {
    const { setChannelGain: scg, channel } = props;
    scg(channel.id, e.target.value / 100);
  },
});

export const Channel = compose(
  connect(channelSelectors, mapDispatchToProps),
  handlers,
)(ChannelComponent);
