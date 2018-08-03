import React from 'react';
import PropTypes from 'prop-types';

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
        src="/assets/images/simplegray.png"
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
