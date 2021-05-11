import React from "react";
import { Flex } from "@chakra-ui/layout";
import UserCard from "../components/UserCard";
import ImageCard from "../components/ImageCard";

const Home = () => {
  return (
    <Flex>
      {/* <UserCard /> */}
      <ImageCard />
    </Flex>
  );
};

export default Home;
