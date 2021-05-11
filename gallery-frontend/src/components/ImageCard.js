import { useDisclosure } from "@chakra-ui/hooks";
import { Image } from "@chakra-ui/image";
import { Box, GridItem, Link, Flex, Text } from "@chakra-ui/layout";
import React from "react";
import ModalImageDetails from "./ModalImageDetails";

const ImageCard = ({ id, subtitle, author, file, tags, collection }) => {
  const mappedTags = tags.map((tag) => {
    return <Link>{tag}</Link>;
  });
  const { onOpen } = useDisclosure();
  return (
    <GridItem>
      <Flex
        as="article"
        key={id}
        direction="column"
        h="18em"
        border="1px solid none"
        bgColor="palette1.1"
        borderRadius="1em"
        p="4px"
        color="palette2.3"
        fontSize="lg"
        _hover={{ bgColor: "palette2.5" }}
      >
        <Box w="100%" h="70%" marginBottom="2px">
          <Box position="absolute" zIndex={2} h="17.5em" w="19%">
            <ModalImageDetails
              subtitle={subtitle}
              author={author}
              file={file}
              tags={tags}
              collection={collection}
            />
          </Box>
          <Image src={file} w="100%" h="100%" objectFit="contain" />
        </Box>
        <Flex direction="column" h="30%" p="4px">
          <Text as="h5" fontSize="xl">
            {subtitle}
          </Text>
          <Text p="0" lineHeight="1.5">
            {author}. <i>{collection}</i>
          </Text>
        </Flex>
      </Flex>
    </GridItem>
  );
};

export default ImageCard;
