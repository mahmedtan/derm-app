import { Button, Box, Text, Stack } from "grommet";
import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import { addImage, removeImage } from "../../reducers/imageReducer";
import { Close, FormSubtract, FormTrash } from "grommet-icons";
import imageCompression from "browser-image-compression";
const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  justifyContent: "center",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

function Dropzone(props) {
  const images = useSelector(({ images }) => images);
  const dispatch = useDispatch();
  const { getRootProps, getInputProps, open } = useDropzone({
    accept: "image/*",
    noClick: true,
    maxFiles: 3,
    noKeyboard: true,
    onDrop: (acceptedFiles) => {
      Promise.all(
        acceptedFiles.map((acceptedFile) => {
          return imageCompression(acceptedFile, {
            maxSizeMB: 1,
            maxWidthOrHeight: 1920,
            useWebWorker: true,
          });
        })
      ).then((files) => {
        dispatch(addImage(files));
      });
    },
  });

  const thumbs = images.map((file) => (
    <Stack anchor="top-right" key={file.name}>
      <div style={thumb}>
        <div style={thumbInner}>
          <img src={file.preview} style={img} />
        </div>
      </div>
      <Box
        margin={{ horizontal: "1.2rem", vertical: "0.7rem" }}
        round="full"
        elevation="medium"
        background="black"
        onClick={() => {
          dispatch(removeImage({ name: file.name }));
        }}
      >
        <FormSubtract color="white" type="filled" />
      </Box>
    </Stack>
  ));

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
        gap="medium"
      >
        <input {...getInputProps()} />
        <Box gap="small">
          <Text textAlign="center">Drag 'n' drop some images here</Text>
          <Text textAlign="center">or</Text>
        </Box>

        <Button
          secondary
          disabled={images.length === 3}
          label="Click to select images"
          onClick={open}
        />
      </Box>
      <aside style={thumbsContainer}>{thumbs}</aside>
    </Box>
  );
}

export default Dropzone;
