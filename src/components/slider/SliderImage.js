import { Image, Box, Heading, Stack } from "grommet";
import React from "react";

const SliderImage = ({ imgSrc, title, size }) => {
  return (
    <Stack anchor="center">
      <Box
        align="center"
        overflow="hidden"
        height="medium"
        round={size === "small" ? "medium" : "small"}
        margin={{
          vertical: "large",
          horizontal:
            size === "small" || size === "xsmall" ? "medium" : "small",
        }}
        elevation="medium"
      >
        <Image src={imgSrc} fit="cover" />
      </Box>
      <Box
        elevation="large"
        align="center"
        background={{
          color: "light-6",
          opacity: "strong",
        }}
        pad={{ horizontal: "medium" }}
        overflow="hidden"
      >
        <Heading level={3} color="black">
          {title}
        </Heading>
      </Box>
    </Stack>
  );
};

export default SliderImage;
