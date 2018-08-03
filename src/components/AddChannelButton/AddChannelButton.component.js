import React from 'react';
import PropTypes from 'prop-types';
import { HoverButton } from '../design-system';

export const AddChannelButtonComponent = ({ addChannel }) => (
  <HoverButton
    onClick={addChannel}
    width="13rem"
    bg="darkGray"
    color="gray"
    hoverColor="nearWhite"
    hoverBg="steel"
    transitionSpeed="0.2s"
  >
    Add Channel +
  </HoverButton>
);

AddChannelButtonComponent.propTypes = {
  addChannel: PropTypes.func.isRequired,
};
