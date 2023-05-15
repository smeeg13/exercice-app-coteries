import {
  Modal,
  ModalBody,
  Button,
  Avatar,
  Text,
  Code,
  VStack,
  ModalOverlay,
  ModalCloseButton,
  ModalHeader,
  ModalContent,
  Checkbox,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Developper = ({ developer }) => {
  const [isOpen, setIsOpen] = useState(false);
const isHired = developer.hired === 1 ? true : false
  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <VStack
        bg="gray.100"
        shadow="sm"
        rounded="md"
        textAlign="center"
        p="4"
        spacing="3"
      >
        <Avatar src={developer.picture} size="lg" />
        <Code>{developer?.name}</Code>
        <Button
          // as={Link}
          // to={`/developer/${developer.id}`}
          onClick={handleOpen}
          colorScheme="teal"
          size="sm"
          variant="link"
        >
          View Profile
        </Button>
      </VStack>

      <Modal isOpen={isOpen} onClose={handleClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Developer Full View</ModalHeader>
          <ModalCloseButton />
          <ModalBody>

            <VStack
              bg="gray.100"
              shadow="sm"
              rounded="md"
              textAlign="center"
              p="4"
              spacing="3"
            >
              <Avatar src={developer.picture} size="xl" />
              <Code>@{developer.name}</Code>
              <Text>{developer.description}</Text>
<Checkbox isDisabled isChecked={isHired}> hired </Checkbox>
              <Button
                onClick={handleClose}
                colorScheme="teal"
                size="sm"
                variant="link"
              >
                Close Profile
              </Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Developper;
