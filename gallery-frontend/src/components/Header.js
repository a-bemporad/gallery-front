import React from "react";
import { Image } from "@chakra-ui/image";
import { Flex, Heading } from "@chakra-ui/layout";
import logo from "../assets/logo.png";
import { Button } from "@chakra-ui/button";
import { useHistory } from "react-router-dom";
import { goToHome, goToLogIn, goToSignUp } from "../routes/coordinator";

const Header = ({ logged, setLogged }) => {
  const history = useHistory();
  const onClickLog = () => {
    if (logged === "Log Out") {
      localStorage.removeItem("token");
      setLogged("Log In");
      goToLogIn(history);
    } else {
      goToLogIn(history);
    }
  };
  return (
    <Flex bgColor="palette1.2" p="10px 20px" w="100%" alignItems="center">
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
        {logged === "Log Out" ? (
          <></>
        ) : (
          <Button
            variant="callToAction"
            _focus={{ border: "1px solid palette1.2" }}
            mx="2px"
            onClick={() => goToSignUp(history)}
          >
            Sign Up
          </Button>
        )}

        <Button
          variant="callToAction"
          _focus={{ border: "1px solid palette1.2" }}
          mx="2px"
          onClick={onClickLog}
        >
          {logged}
        </Button>
      </Flex>
    </Flex>
  );
};

export default Header;
