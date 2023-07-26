import React from 'react';
import PropTypes from 'prop-types';
import { Sortable } from '@shopify/draggable';
import { Box } from '../design-system';
import { Channel } from '../Channel';
import { AddChannelButton } from '../AddChannelButton';

const ChannelListBox = Box.extend`
  outline: none;
`;

export class ChannelListComponent extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line
    const sortable = new Sortable([this.channelContainer], {
      draggable: '.wds-draggable',
      handle: '.wds-channel-handle',
      mirror: {
        constrainDimensions: true,
      },
    });

    sortable.on('sortable:stop', ({ oldIndex, newIndex }) => {
      const { onUpdateChannelOrder } = this.props;
      onUpdateChannelOrder(oldIndex, newIndex);
    });
  }

  render() {
    const { channels } = this.props;
    return (
      <ChannelListBox mt={2} innerRef={(el) => { this.channelContainer = el; }}>
        {channels.map(channel => <Channel key={channel.id} channel={channel} />)}
        <AddChannelButton />
      </ChannelListBox>
    );
  }
}

ChannelListComponent.propTypes = {
  channels: PropTypes.arrayOf(PropTypes.object).isRequired,
  onUpdateChannelOrder: PropTypes.func.isRequired,
};
