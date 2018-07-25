import React from 'react';
import { Channel } from '..';

export const ChannelListComponent = ({ channels }) => (
  <div>{channels.map(channel => <Channel key={channel.id} data={channel} />)}</div>
);
