import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import theme from '../../styles/theme';

export const PresetSelectorComponent = ({
  onSelectPreset,
  presets,
  currentPreset,
  isEdited,
}) => {
  const defaultPresets = presets.map(preset => ({
    label: preset.name,
    value: preset,
  }));

  const groupedOptions = [
    {
      label: 'Default',
      options: defaultPresets,
    },
    {
      label: 'User',
      options: [],
    },
    {
      label: 'Memory',
      options: [
        {
          label: 'Save',
          value: 'SAVE_PRESET',
        },
        {
          label: 'Save As...',
          value: 'SAVE_PRESET_AS',
        },
      ],
    },
  ];

  const selectedOption = defaultPresets.find(option => option.label === currentPreset.name);
  if (isEdited && selectedOption) {
    selectedOption.label += ' *';
  }

  return (
    <Select
      options={groupedOptions}
      onChange={onSelectPreset}
      value={selectedOption}
      styles={{
        control: styles => ({
          ...styles,
          backgroundColor: 'black',
          border: `2px solid ${theme.colors.steel}`,
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
  isEdited: PropTypes.bool.isRequired,
  currentPreset: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  onSelectPreset: PropTypes.func.isRequired,
  presets: PropTypes.arrayOf(PropTypes.object).isRequired,
};
