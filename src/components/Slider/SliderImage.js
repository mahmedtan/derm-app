import { Image, Box, Heading, Stack } from "grommet";
import React from "react";
import { Link } from "react-router-dom";

const SliderImage = ({ image, name, size, slug }) => {
  return (
    <Link to={`/services/${slug}`}>
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
          <Image src={image} fit="cover" />
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
            {name}
          </Heading>
        </Box>
      </Stack>
    </Link>
  );
};

export default SliderImage;
