import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { ChannelSelectComponent } from './ChannelSelect.component';
import { setChannelSample } from '../../common';

const mapDispatchToProps = {
  setChannelSample,
};

const handlers = withHandlers({
  onSelectSample: props => (sample) => {
    const { setChannelSample: connectedSetChannelSample, channel } = props;
    connectedSetChannelSample(channel.id, sample.value);
  },
});

export const ChannelSelect = compose(
  connect(null, mapDispatchToProps),
  handlers,
)(ChannelSelectComponent);
