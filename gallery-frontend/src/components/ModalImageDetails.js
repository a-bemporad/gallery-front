import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  Link,
  Box,
  Heading,
  Image,
  Flex,
} from "@chakra-ui/react";

const ModalImageDetails = ({ subtitle, author, file, tags, collection }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const mappedTags = tags.map((tag) => {
    return <Link px="0.5em">{tag}</Link>;
  });
  return (
    <>
      <Box onClick={onOpen} h="100%"></Box>
      <Modal isOpen={isOpen} onClose={onClose} size="md">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Heading>{subtitle}</Heading>
            <Text fontSize="xl">{author}</Text>
            <Image src={file} />
          </ModalBody>

          <ModalFooter>
            <Flex mx="0.3em" justifyContent="space-between">
              {mappedTags}
            </Flex>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalImageDetails;
