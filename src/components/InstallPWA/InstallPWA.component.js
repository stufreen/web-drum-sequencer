import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Text,
  HoverButton,
} from '../design-system';
import { promptToInstall } from '../../services/pwaInstall';

export const InstallPWA = ({ onDismiss }) => (
  <Box>
    <Text
      fontWeight="400"
      color="nearBlack"
      fontSize={2}
      mb={3}
    >
      Would you like to install WDS-1 to your home screen?
    </Text>
    <Box display="flex" justifyContent="flex-end">
      <HoverButton
        bg="blue"
        hoverBg="darkBlue"
        onClick={() => {
          promptToInstall();
          onDismiss();
        }}
        width="7rem"
        color="white"
        display="block"
        py={2}
      >
        INSTALL
      </HoverButton>
      <HoverButton
        bg="white"
        hoverBg="nearWhite"
        hoverColor="nearBlack"
        border="2px solid lightGray"
        onClick={onDismiss}
        width="7rem"
        color="darkGray"
        ml={1}
        display="block"
        py={2}
      >
        NOPE
      </HoverButton>
    </Box>
  </Box>
);

InstallPWA.propTypes = {
  onDismiss: PropTypes.func.isRequired,
};
