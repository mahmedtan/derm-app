import { Button, Box, Text, Stack, Image } from "grommet";
import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Close } from "grommet-icons";
import { useDispatch, useSelector } from "react-redux";
import { addImage } from "../../reducers/imageReducer";

function Dropzone(props) {
  const images = useSelector(({ images }) => images);
  const dispatch = useDispatch();
  const { getRootProps, getInputProps, open } = useDropzone({
    accept: "image/*",
    noClick: true,
    maxFiles: 3,
    noDrag: images.length === 3,
    noKeyboard: true,
    onDrop: (acceptedFiles) => {
      dispatch(addImage(acceptedFiles));
    },
  });

  const Thumbs = () => (
    <Box gap="small" direction="row" align="center" justify="center">
      {images.map((file) => (
        <Stack key={file.name} anchor="top-right">
          <Box
            width="xsmall"
            height="xsmall"
            round="xsmall"
            elevation="small"
            overflow="hidden"
          >
            <Image src={file.preview} fit="cover" />
          </Box>

          <Button label={<Close color="white" />} />
        </Stack>
      ))}
    </Box>
  );
  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      images.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [images]
  );

  return (
    <Box className="container" pad="medium">
      <Box
        {...getRootProps({ className: "dropzone" })}
        focusIndicator={false}
        gap="small"
      >
        <input {...getInputProps()} />
        <Box>
          <Text textAlign="center">Drag & drop or</Text>
        </Box>

        <Button
          secondary
          disabled={images.length === 3}
          label="Click to select images"
          onClick={open}
        />
        <Thumbs />
      </Box>
    </Box>
  );
}

export default Dropzone;
