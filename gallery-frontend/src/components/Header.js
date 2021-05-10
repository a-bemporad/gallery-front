import React from "react";
import { Image } from "@chakra-ui/image";
import { Flex, Heading } from "@chakra-ui/layout";
import logo from "../assets/logo.png";
import { Button } from "@chakra-ui/button";

const Header = () => {
  return (
    <Flex bgColor="palette1.2" p="10px 20px" w="100vw" alignItems="center">
      <Image src={logo} h="60px" />
      <Flex alignItems="center" grow="1" p="8px" fontSize="1.8em">
        <Heading fontSize="1.5em">Serendipia</Heading>
      </Flex>
      <Flex direction="column" justifyContent="flex-end">
        <Button
          variant="call-to-action"
          _focus={{ border: "1px solid palette1.2" }}
          my="2px"
        >
          Sign Up
        </Button>
        <Button
          variant="call-to-action"
          _focus={{ border: "1px solid palette1.2" }}
          my="2px"
        >
          Log In
        </Button>
      </Flex>
    </Flex>
  );
};

export default Header;
