import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { Box } from '../design-system';
import sampleOptions from '../../samples.config.json';
import theme from '../../styles/theme';

export const ChannelSelect = ({ onChange, channel }) => {
  const options = sampleOptions.map(sampleOption => ({
    value: sampleOption.url,
    label: sampleOption.name,
  }));
  const currentOption = options.find(option => channel.sample.url === option.value);
  return (
    <Box flex="1 1 auto" pr={2}>
      <Select
        options={options}
        onChange={onChange}
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

ChannelSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  channel: PropTypes.shape({
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
    id: PropTypes.string.isRequired,
    sample: PropTypes.object.isRequired,
    gain: PropTypes.number.isRequired,
  }).isRequired,
};
