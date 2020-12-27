import { Image, Box, Stack, Text } from "grommet";
import React from "react";
import { Link } from "react-router-dom";

const SliderImage = ({ image, name, size, slug }) => {
  return (
    <Link to={`/services/${slug}`}>
      <Stack anchor="bottom">
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
            color: "light-3",
            opacity: "10%",
          }}
          margin={{ vertical: "large" }}
          pad={{ horizontal: "medium", vertical: "medium" }}
          overflow="hidden"
        >
          <Text size="xxlarge" color="dark-1" textAlign="center">
            {name}
          </Text>
        </Box>
      </Stack>
    </Link>
  );
};

export default SliderImage;
