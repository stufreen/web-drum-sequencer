import React from 'react';
import { ChannelLabel, Toggles } from '.';

export const Channel = ({ data }) => (
  <div className="flex">
    <ChannelLabel>{data.name}</ChannelLabel>
    <Toggles />
  </div>
);
