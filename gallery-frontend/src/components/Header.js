import React from "react";
import { Image } from "@chakra-ui/image";
import { Flex, Heading } from "@chakra-ui/layout";
import logo from "../assets/logo.png";
import { Button } from "@chakra-ui/button";
import { useHistory } from "react-router-dom";
import { goToHome, goToLogIn, goToSignUp } from "../routes/coordinator";

const Header = () => {
  const history = useHistory();
  return (
    <Flex bgColor="palette1.2" p="10px 20px" w="100vw" alignItems="center">
      <Image src={logo} h="60px" />
      <Flex alignItems="center" grow="1" p="8px" fontSize="1.8em">
        <Heading fontSize="1.5em">Serendipia</Heading>
      </Flex>
      <Flex justifyContent="flex-end">
        <Button
          variant="softAction"
          _focus={{ border: "1px solid palette1.2" }}
          mx="2px"
          onClick={() => goToHome(history)}
        >
          Home
        </Button>
        <Button
          variant="callToAction"
          _focus={{ border: "1px solid palette1.2" }}
          mx="2px"
          onClick={() => goToSignUp(history)}
        >
          Sign Up
        </Button>
        <Button
          variant="callToAction"
          _focus={{ border: "1px solid palette1.2" }}
          mx="2px"
          onClick={() => goToLogIn(history)}
        >
          Log In
        </Button>
      </Flex>
    </Flex>
  );
};

export default Header;
