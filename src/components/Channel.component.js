import React from 'react';
import { ChannelLabel, Toggles } from '.';

export const Channel = ({ channel }) => (
  <div className="flex">
    <ChannelLabel>{channel.name}</ChannelLabel>
    <Toggles notes={channel.notes} channelID={channel.id} />
  </div>
);
