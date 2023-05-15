import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import usePost from "../../hooks/usePost";
import { fetchURL } from "../../lib/routes";
import { v4 as uuidv4 } from "uuid";
import Webcam from "react-webcam";

const Create = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { sendData, error, loading } = usePost();
  const [isChecked, setChecked] = useState(false);

  const [capturedImage, setCapturedImage] = useState(null);
  const webcamRef = useRef(null);
  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
  };

  const [file, setFile] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  );

  async function handleCreation(data) {
    const succeeded = await sendData(fetchURL, {
      id: uuidv4(),
      name: data.name,
      description: data.description,
      hired: isChecked ? 1 : 0,
      picture: captureImage || file,
    });

    if (succeeded) reset();
  }

  const handleChangeAvatar = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <Box mx="auto" pb="10" mt="10">
      <Heading size="lg"> Adding a New Developper in the team</Heading>

      <form onSubmit={handleSubmit(handleCreation)}>
        <FormControl isInvalid={errors.name} py={2}>
          <FormLabel>Name :</FormLabel>
          <Input
            type="name"
            placeholder="Jane Doe"
            required
            name="name"
            {...register("name", { required: true })}
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.description} py={2}>
          <FormLabel>Description :</FormLabel>
          <Input
            type="description"
            placeholder="My post's descritption"
            required
            name="description"
            {...register("description", { required: true })}
          />
          <FormErrorMessage>
            {errors.description && errors.description.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl py={2}>
          <Checkbox
            isChecked={isChecked}
            onChange={(e) => setChecked(e.target.checked)}
          >
            {" "}
            Hired{" "}
          </Checkbox>
        </FormControl>
        <br />
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Take a Picture
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Webcam
                audio={false}
                mirrored={true}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
              />
              <Button onClick={captureImage}>Capture Photo</Button>
              {capturedImage && (
                <img
                  src={capturedImage}
                  alt="Captured"
                  style={{ maxWidth: "100%" }}
                />
              )}{" "}
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Select a Picture
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <FormControl py="4">
                <FormLabel htmlFor="picture">Choose Avatar</FormLabel>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleChangeAvatar}
                />
              </FormControl>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Button
          mt={4}
          type="submit"
          colorScheme="teal"
          w="full"
          size="md"
          isLoading={loading}
        >
          Add Developper
        </Button>
      </form>
    </Box>
  );
};

export default Create;
