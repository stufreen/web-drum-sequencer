import { connect } from 'react-redux'
import { compose } from 'recompose';
import { ChannelListComponent } from './ChannelList.component';
import { channelsSelector } from '../../common';

export const ChannelList = compose(
  connect(channelsSelector, null),
)(ChannelListComponent);
