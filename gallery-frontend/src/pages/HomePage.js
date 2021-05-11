import React from "react";
import { Flex, Grid, GridItem, SimpleGrid } from "@chakra-ui/layout";
import UserCard from "../components/UserCard";
import ImageCard from "../components/ImageCard";

const Home = () => {
  //aqui vai ser importado o request
  const images = [
    {
      id: 1,
      subtitle: "adansonia",
      author: "Kai",
      file:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Adansonia_grandidieri04.jpg/1200px-Adansonia_grandidieri04.jpg",
      tags: ["tag1", "tag2", "tag3"],
      collection: "árvores",
    },
    {
      id: 2,
      subtitle: "dragon tree",
      author: "Ástrid",
      file:
        "https://upload.wikimedia.org/wikipedia/commons/8/83/Socotra_dragon_tree.JPG",
      tags: ["tag2", "tag4", "tag6"],
      collection: "árvores",
    },
    {
      id: 3,
      subtitle: "jacarandá mimosifolia",
      author: "Ástrid",
      file:
        "https://www.fazfacil.com.br/wp-content/uploads/2013/03/dscf7320-700x408.jpg",
      tags: ["tag5"],
      collection: "árvores",
    },
    {
      id: 4,
      subtitle: "adansonia",
      author: "Kai",
      file:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Adansonia_grandidieri04.jpg/1200px-Adansonia_grandidieri04.jpg",
      tags: ["tag1", "tag2", "tag3"],
      collection: "árvores",
    },
    {
      id: 5,
      subtitle: "dragon tree",
      author: "Ástrid",
      file:
        "https://upload.wikimedia.org/wikipedia/commons/8/83/Socotra_dragon_tree.JPG",
      tags: ["tag2", "tag4", "tag6"],
      collection: "árvores",
    },
    {
      id: 6,
      subtitle: "jacarandá mimosifolia",
      author: "Ástrid",
      file:
        "https://www.fazfacil.com.br/wp-content/uploads/2013/03/dscf7320-700x408.jpg",
      tags: ["tag5"],
      collection: "árvores",
    },
    {
      id: 7,
      subtitle: "baobabbaobabbaobabbaoba",
      author: "Kai",
      file:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Adansonia_grandidieri04.jpg/1200px-Adansonia_grandidieri04.jpg",
      tags: ["tag1", "tag2", "tag3"],
      collection: "árvores",
    },
    {
      id: 8,
      subtitle: "dragon tree",
      author: "Ástrid",
      file:
        "https://upload.wikimedia.org/wikipedia/commons/8/83/Socotra_dragon_tree.JPG",
      tags: ["tag2", "tag4", "tag6"],
      collection: "árvores",
    },
    {
      id: 9,
      subtitle: "jacarandá mimosifolia",
      author: "Ástrid",
      file:
        "https://www.fazfacil.com.br/wp-content/uploads/2013/03/dscf7320-700x408.jpg",
      tags: ["tag5"],
      collection: "árvores",
    },
  ];
  const mappedImages = images.map((image) => {
    return (
      <ImageCard
        as="GridItem"
        id={image.id}
        subtitle={image.subtitle}
        author={image.author}
        file={image.file}
        tags={image.tags}
        collection={image.collection}
      />
    );
  });
  return (
    <Grid w="80vw" templateColumns="repeat(4, 1fr)" gap={2} mx="auto" my="2em">
      {mappedImages}
    </Grid>
  );
};

export default Home;
