import { Button } from "@chakra-ui/button";
import { FormErrorMessage } from "@chakra-ui/form-control";
import { FormControl } from "@chakra-ui/form-control";
import { InputGroup } from "@chakra-ui/input";
import { InputRightElement } from "@chakra-ui/input";
import { Input } from "@chakra-ui/input";
import { Flex } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { Center } from "@chakra-ui/layout";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link as ReactRouterLink, useHistory } from "react-router-dom";
import { loginRequest } from "../requests/logInRequest";

const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useHistory();
  //aqui o data é o valor do input controlado
  const onSubmit = (data, event) => {
    event.preventDefault();
    loginRequest(data, history);
    console.log(data);
  };

  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  return (
    <Center>
      <Flex
        w="30%"
        my="2em"
        flexDirection="column"
        border="1px solid palette1.5"
        bgColor="palette2.3"
        p="3em"
      >
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <FormControl isInvalid={errors.email}>
            <Input
              focusBorderColor="palette2.4"
              borderColor="palette2.4"
              placeholder="Email"
              {...register("email", {
                required: "Required field",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email",
                },
              })}
            />
            <FormErrorMessage>
              {errors.email && <p>{errors.email.message}</p>}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.password}>
            <InputGroup>
              <Input
                focusBorderColor="palette2.4"
                borderColor="palette2.4"
                type={show ? "text" : "password"}
                placeholder="Password"
                {...register("password", {
                  required: "Required field",
                  minLength: {
                    value: 6,
                    message: "Password must have at least 6 characters",
                  },
                })}
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  bgColor="palette2.3"
                  onClick={handleClick}
                  _hover={{ bgColor: "palette2.3" }}
                  _active={{ bgColor: "palette2.4" }}
                  _focus={{ borderColor: "palette2.3" }}
                >
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>
              {errors.password && <p>{errors.password.message}</p>}
            </FormErrorMessage>
          </FormControl>
          <Button type="submit" variant="callToAction" w="100%" my="1em">
            Log In
          </Button>
          <Text textAlign="center">
            Don't have an user? Sign up{" "}
            <Link as={ReactRouterLink} to="/signUp" color="teal.500">
              here
            </Link>
          </Text>
        </form>
      </Flex>
    </Center>
  );
};

export default LogIn;
