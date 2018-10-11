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
      Would you like to install this app to your home screen?
    </Text>
    <HoverButton
      bg="blue"
      hoverBg="darkBlue"
      onClick={() => {
        promptToInstall();
        onDismiss();
      }}
      width="8rem"
      color="white"
      ml="auto"
      display="block"
    >
      INSTALL
    </HoverButton>
  </Box>
);

InstallPWA.propTypes = {
  onDismiss: PropTypes.func.isRequired,
};
