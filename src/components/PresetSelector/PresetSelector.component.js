import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import theme from '../../styles/theme';

export const PresetSelectorComponent = ({ onSelectPreset, presets, currentPreset }) => {
  const options = presets.map(preset => ({
    label: preset.name,
    value: preset,
  }));
  const selectedOption = options.find(option => option.label === currentPreset);
  return (
    <Select
      options={options}
      onChange={onSelectPreset}
      value={selectedOption}
      styles={{
        control: styles => ({
          ...styles,
          backgroundColor: 'black',
          border: `2px solid ${theme.colors.gray}`,
          padding: '0.5em 0.5em 0.5em 1em',
          borderRadius: '0.5em',
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
  currentPreset: PropTypes.string.isRequired,
  onSelectPreset: PropTypes.func.isRequired,
  presets: PropTypes.arrayOf(PropTypes.object).isRequired,
};
