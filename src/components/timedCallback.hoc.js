import React from 'react';

export const timedCallback = (callback, delay) => WrappedEl => class extends React.Component {
  constructor() {
    super();
    this.timer = setTimeout(callback, delay);
  }

  componentDidUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return <WrappedEl {...this.props} />;
  }
};
