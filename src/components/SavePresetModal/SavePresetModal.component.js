import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  TextInput,
  Text,
  Button,
  HoverButton,
} from '../design-system';
import { Modal } from '../Modal.component';

export class SavePresetModalComponent extends React.Component {
  componentDidUpdate() {
    const { presetPromptOpen } = this.props;
    if (presetPromptOpen) {
      console.log(this.nameInput);
      this.nameInput.focus();
    }
  }

  render() {
    const { presetPromptOpen, setPresetPrompt } = this.props;
    return (
      <Modal show={presetPromptOpen}>
        <Box
          position="relative"
          display="flex"
          flexDirection="row"
        >
          <label htmlFor="preset-name">
            <Text color="white" fontSize={2} height="2rem">
              Preset Name
            </Text>
            <TextInput
              bg="white"
              borderRadius={3}
              fontSize={3}
              p={3}
              width="15em"
              id="preset-name"
              placeholder="Enter name..."
              innerRef={(input) => { this.nameInput = input; }}
            />
          </label>
          <HoverButton
            bg="darkMelon"
            hoverBg="melon"
            color="white"
            transitionSpeed="0.1s"
            mt="2rem"
            borderRadius={0}
            p={0}
            width="4rem"
          >
            SAVE
          </HoverButton>
          <Button
            bg="transparent"
            color="gray"
            p={0}
            display="flex"
            justifyContent="space-between"
            onClick={() => {
              setPresetPrompt(false);
            }}
            fontSize={3}
            alignItems="center"
            alignSelf="center"
            transitionSpeed="0.2s"
            position="absolute"
            right={0}
            top={0}
            width={20}
            height={20}
          >
            <svg width="20" height="20" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
              <path d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z" fill="white" />
            </svg>
          </Button>
        </Box>
      </Modal>
    );
  }
}

SavePresetModalComponent.propTypes = {
  presetPromptOpen: PropTypes.bool.isRequired,
};
