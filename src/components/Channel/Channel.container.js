import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { ChannelComponent } from './Channel.component';
import { channelSelectors } from './Channel.selectors';
import { setChannelSample } from '../../common';

const mapDispatchToProps = {
  setChannelSample,
};

const handlers = withHandlers({
  onSelectSample: props => (sample) => {
    const { setChannelSample: scs, channel } = props;
    scs(channel.id, sample.value);
  },
});

export const Channel = compose(
  connect(channelSelectors, mapDispatchToProps),
  handlers,
)(ChannelComponent);
