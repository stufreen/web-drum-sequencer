import React from 'react';
import PropTypes from 'prop-types';
import { Box } from './design-system';

export const Modal = ({ children, show }) => (
  <Box
    position="fixed"
    left={0}
    top={0}
    width="100%"
    height="100%"
    bg="black80"
    display={show ? 'flex' : 'none'}
    zIndex={99}
    justifyContent="center"
    alignItems="center"
  >
    {children}
  </Box>
);

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  show: PropTypes.bool.isRequired,
};
