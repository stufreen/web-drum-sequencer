import React from 'react';
import PropTypes from 'prop-types';
import { ChannelLabel } from './ChannelLabel.component';
import { Toggles } from './Toggles';

export const Channel = ({ channel }) => (
  <div className="flex mb2">
    <ChannelLabel>
      {channel.name}
    </ChannelLabel>
    <Toggles notes={channel.notes} channelID={channel.id} />
  </div>
);

Channel.propTypes = {
  channel: PropTypes.shape({
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
