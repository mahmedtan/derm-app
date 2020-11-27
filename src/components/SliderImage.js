import { Image, Box, Heading, Stack } from "grommet";
import React from "react";

const SliderImage = ({ imgSrc, title }) => {
  return (
    <Stack anchor="bottom">
      <Box
        align="center"
        overflow="hidden"
        height="medium"
        round="medium"
        margin="large"
        elevation="medium"
      >
        <Image src={imgSrc} fit="cover" />
      </Box>
      <Box align="center">
        <Heading
          style={{ textShadow: "2px 2px 10px black" }}
          level={2}
          color="white"
        >
          {title}
        </Heading>
      </Box>
    </Stack>
  );
};

export default SliderImage;
