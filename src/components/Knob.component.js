import React from 'react';
import PropTypes from 'prop-types';
import knobImage from 'webaudio-controls/knobs/simplegray.png'; // eslint-disable-line import/no-extraneous-dependencies
import 'webaudio-controls/webaudio-controls'; // eslint-disable-line import/no-extraneous-dependencies

export class Knob extends React.Component {
  componentDidMount() {
    const { onChange } = this.props;
    this.knob.addEventListener('input', onChange);
  }

  render() {
    const { size, value } = this.props;
    return (
      <webaudio-knob
        ref={(element) => { this.knob = element; }}
        src={knobImage}
        sprites="100"
        min="0"
        max="100"
        width={size}
        height={size}
        value={value}
      />
    );
  }
}

Knob.propTypes = {
  onChange: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
