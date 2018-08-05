import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import theme from '../../styles/theme';

export const PresetSelectorComponent = ({ onSelectPreset, presets }) => {
  const options = presets.map(preset => ({
    label: preset.name,
    value: preset,
  }));
  return (
    <Select
      options={options}
      onChange={onSelectPreset}
      defaultValue={options[0]}
      styles={{
        control: styles => ({
          ...styles,
          backgroundColor: 'black',
          border: `1px solid ${theme.colors.steel}`,
          padding: '0.5em 1em',
        }),
        singleValue: styles => ({
          ...styles,
          color: theme.colors.nearWhite,
        }),
        option: styles => ({
          ...styles,
          padding: '0.4em 1em',
        }),
      }}
    />
  );
};

PresetSelectorComponent.propTypes = {
  onSelectPreset: PropTypes.func.isRequired,
  presets: PropTypes.arrayOf(PropTypes.object).isRequired,
};
