import React from 'react';
import PropTypes from 'prop-types';
import { Channel } from '../Channel';
import { AddChannelButton } from '../AddChannelButton';

export const ChannelListComponent = ({ channels }) => (
  <div>
    {channels.map(channel => <Channel key={channel.id} channel={channel} />)}
    <AddChannelButton />
  </div>
);

ChannelListComponent.propTypes = {
  channels: PropTypes.arrayOf(PropTypes.object).isRequired,
};
