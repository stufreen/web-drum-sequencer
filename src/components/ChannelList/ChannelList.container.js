import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { ChannelListComponent } from './ChannelList.component';
import { channelListSelectors } from './ChannelList.selectors';
import { toggleNote, updateChannelOrder } from '../../common';

const mapDispatchToProps = {
  toggleNote,
  updateChannelOrder,
};

const handlers = withHandlers({
  onUpdateChannelOrder: props => (oldIndex, newIndex) => {
    const { updateChannelOrder: updateChannelOrderConnected } = props;
    updateChannelOrderConnected(oldIndex, newIndex);
  },
});

export const ChannelList = compose(
  connect(channelListSelectors, mapDispatchToProps),
  handlers,
)(ChannelListComponent);
