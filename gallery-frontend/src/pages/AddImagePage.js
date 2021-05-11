import React from "react";
import { Button } from "@chakra-ui/button";
import { FormErrorMessage } from "@chakra-ui/form-control";
import { FormControl } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Flex } from "@chakra-ui/layout";
import { Center } from "@chakra-ui/layout";
import { useForm } from "react-hook-form";
import { Heading } from "@chakra-ui/layout";

const AddImage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //aqui o data é o valor do input controlado
  const onSubmit = (data) => console.log(data);
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
        <Heading fontSize="2xl" textAlign="center" marginBottom="1em">
          Upload your image
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <FormControl isInvalid={errors.subtitle}>
            <Input
              focusBorderColor="palette2.4"
              borderColor="palette2.4"
              placeholder="Subtitle"
              {...register("subtitle", { required: "Required field" })}
            />
            <FormErrorMessage>
              {errors.subtitle && <p>{errors.subtitle.message}</p>}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.file}>
            <Input
              focusBorderColor="palette2.4"
              borderColor="palette2.4"
              placeholder="File"
              {...register("file", {
                required: "Required field",
              })}
            />
            <FormErrorMessage>
              {errors.file && <p>{errors.file.message}</p>}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.tags}>
            {/*  */}
            <Input
              focusBorderColor="palette2.4"
              borderColor="palette2.4"
              placeholder="Tags"
              {...register("tags", { required: "Required field" })}
            />
            <FormErrorMessage>
              {errors.tags && <p>{errors.tags.message}</p>}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.collection}>
            {/* ACHO QUE AQUI VAI MELHOR UM SELECT?! */}
            <Input
              focusBorderColor="palette2.4"
              borderColor="palette2.4"
              placeholder="Collection"
              {...register("collection", { required: "Required field" })}
            />
            <FormErrorMessage>
              {errors.collection && <p>{errors.collection.message}</p>}
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

export default AddImage;
