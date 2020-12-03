import React, { useContext } from "react";
import { Box, Button, Image, Text, ResponsiveContext } from "grommet";

const StoryCard = ({ image, title, description }) => {
  const size = useContext(ResponsiveContext);

  return (
    <Box
      direction="row-responsive"
      align="center"
      margin={{
        horizontal: size === "small" ? "none" : "16vw",
      }}
    >
      <Box
        round="full"
        overflow="hidden"
        width={size === "small" ? "small" : "15rem"}
        height={size === "small" ? "small" : "15rem"}
        margin="large"
        elevation="large"
        alignSelf="center"
      >
        <Image src={image} fit="cover" />
      </Box>
      <Box
        width="medium"
        gap={size === "small" ? "medium" : "small"}
        align={size === "small" ? "center" : "start"}
      >
        <Box style={{ fontFamily: "sans-serif", fontSize: "1.5rem" }}>
          <strong>{title}</strong>
        </Box>
        <Text textAlign={size === "small" ? "center" : "start"}>
          {description}
        </Text>
        <Button primary>Learn More</Button>
      </Box>
    </Box>
  );
};

export default StoryCard;
