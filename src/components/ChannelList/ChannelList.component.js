import React from 'react';
import PropTypes from 'prop-types';
import { Channel } from '../Channel';

export const ChannelListComponent = ({ channels }) => (
  <div>
    {channels.map(channel => <Channel key={channel.id} channel={channel} />)}
  </div>
);

ChannelListComponent.propTypes = {
  channels: PropTypes.arrayOf(PropTypes.object).isRequired,
};
