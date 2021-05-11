import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/layout";
import { GridItem } from "@chakra-ui/layout";
import { Grid } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import React from "react";

const ImageCard = () => {
  const mockArray = [
    {
      subtitle: "baobabbaobabbaobabbaoba",
      author: "Kai",
      file:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Adansonia_grandidieri04.jpg/1200px-Adansonia_grandidieri04.jpg",
      tags: ["tag1", "tag2", "tag3"],
      collection: "árvores",
    },
    {
      subtitle: "dragon tree",
      author: "Ástrid",
      file:
        "https://upload.wikimedia.org/wikipedia/commons/8/83/Socotra_dragon_tree.JPG",
      tags: ["tag2", "tag4", "tag6"],
      collection: "árvores",
    },
    {
      subtitle: "jacarandá mimosifolia",
      author: "Ástrid",
      file:
        "https://www.fazfacil.com.br/wp-content/uploads/2013/03/dscf7320-700x408.jpg",
      tags: ["tag5"],
      collection: "árvores",
    },
    {
      subtitle: "baobabbaobabbaobabbaoba",
      author: "Kai",
      file:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Adansonia_grandidieri04.jpg/1200px-Adansonia_grandidieri04.jpg",
      tags: ["tag1", "tag2", "tag3"],
      collection: "árvores",
    },
    {
      subtitle: "dragon tree",
      author: "Ástrid",
      file:
        "https://upload.wikimedia.org/wikipedia/commons/8/83/Socotra_dragon_tree.JPG",
      tags: ["tag2", "tag4", "tag6"],
      collection: "árvores",
    },
    {
      subtitle: "jacarandá mimosifolia",
      author: "Ástrid",
      file:
        "https://www.fazfacil.com.br/wp-content/uploads/2013/03/dscf7320-700x408.jpg",
      tags: ["tag5"],
      collection: "árvores",
    },
    {
      subtitle: "baobabbaobabbaobabbaoba",
      author: "Kai",
      file:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Adansonia_grandidieri04.jpg/1200px-Adansonia_grandidieri04.jpg",
      tags: ["tag1", "tag2", "tag3"],
      collection: "árvores",
    },
    {
      subtitle: "dragon tree",
      author: "Ástrid",
      file:
        "https://upload.wikimedia.org/wikipedia/commons/8/83/Socotra_dragon_tree.JPG",
      tags: ["tag2", "tag4", "tag6"],
      collection: "árvores",
    },
    {
      subtitle: "jacarandá mimosifolia",
      author: "Ástrid",
      file:
        "https://www.fazfacil.com.br/wp-content/uploads/2013/03/dscf7320-700x408.jpg",
      tags: ["tag5"],
      collection: "árvores",
    },
  ];
  return (
    <Grid w="80vw" mx="auto" my="3em" templateColumns="repeat(4, 1fr)" gap="4">
      {mockArray.map((mockCard) => {
        return (
          <GridItem>
            <Flex
              as="article"
              direction="column"
              h="20em"
              border="1px solid"
              borderColor="palette1.4"
              borderRadius="1em"
              p="4px"
            >
              <Box w="100%" h="70%" marginBottom="2px">
                <Image
                  src={mockCard.file}
                  w="100%"
                  h="100%"
                  objectFit="contain"
                />
              </Box>
              <Heading as="h5" fontSize="lg" overflowWrap="break-word">
                {mockCard.subtitle}
              </Heading>
              <Text p="0" lineHeight="1.5">
                {mockCard.author}
              </Text>
              <Text p="0" lineHeight="1.5">
                {mockCard.collection}
              </Text>
              <Flex justifyContent="space-evenly">
                {mockCard.tags.map((tag) => {
                  return <Link>{tag}</Link>;
                })}
              </Flex>
            </Flex>
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default ImageCard;
