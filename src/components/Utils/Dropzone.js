import { Button, Box, Text } from "grommet";
import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import { addImage } from "../../reducers/imageReducer";

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
      dispatch(addImage(acceptedFiles));
    },
  });

  const thumbs = images.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} />
      </div>
    </div>
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
        <Text>Drag 'n' drop some images here, or</Text>
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
