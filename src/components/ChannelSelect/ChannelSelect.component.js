import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { Box } from '../design-system';
import sampleOptions from '../../samples.config.json';
import theme from '../../styles/theme';

export const ChannelSelectComponent = ({ onSelectSample, channel }) => {
  const options = sampleOptions.map(sampleOption => ({
    value: sampleOption.url,
    label: sampleOption.name,
  }));
  const currentOption = options.find(option => channel.sample.url === option.value);
  return (
    <Box flex="1 1 auto" pr={2}>
      <Select
        options={options}
        onChange={onSelectSample}
        value={currentOption}
        styles={{
          control: styles => ({
            ...styles,
            backgroundColor: theme.colors.nearBlack,
            border: 'none',
          }),
          singleValue: styles => ({
            ...styles,
            color: theme.colors.nearWhite,
            fontSize: '0.85rem',
          }),
          menu: styles => ({
            ...styles,
            width: '16rem',
          }),
        }}
      />
    </Box>
  );
};

ChannelSelectComponent.propTypes = {
  onSelectSample: PropTypes.func.isRequired,
  channel: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};
