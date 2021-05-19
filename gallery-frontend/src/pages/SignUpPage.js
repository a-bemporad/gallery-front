import { Button } from "@chakra-ui/button";
import { FormErrorMessage } from "@chakra-ui/form-control";
import { FormControl } from "@chakra-ui/form-control";
import { InputGroup } from "@chakra-ui/input";
import { InputRightElement } from "@chakra-ui/input";
import { Input } from "@chakra-ui/input";
import { Flex } from "@chakra-ui/layout";
import { Center } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { signUpRequest } from "../requests/signUpRequest";

const SignUp = () => {
  const toast = useToast();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, event) => {
    event.preventDefault();
    localStorage.setItem("token", "token");
    signUpRequest(data, history, toast);
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
          <FormControl isInvalid={errors.name}>
            <Input
              focusBorderColor="palette2.4"
              borderColor="palette2.4"
              placeholder="Name"
              {...register("name", { required: "Required field" })}
            />
            <FormErrorMessage>
              {errors.name && <p>{errors.name.message}</p>}
            </FormErrorMessage>
          </FormControl>
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
          <FormControl isInvalid={errors.nickname}>
            <Input
              focusBorderColor="palette2.4"
              borderColor="palette2.4"
              placeholder="Nickname"
              {...register("nickname", { required: "Required field" })}
            />
            <FormErrorMessage>
              {errors.nickname && <p>{errors.nickname.message}</p>}
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
            Register
          </Button>
        </form>
      </Flex>
    </Center>
  );
};

export default SignUp;
