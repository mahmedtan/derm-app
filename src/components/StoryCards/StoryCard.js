import React, { useContext } from "react";
import { Box, Button, Image, Text, ResponsiveContext } from "grommet";
import { Link } from "react-router-dom";

const StoryCard = ({ image, name, description, services }) => {
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
          <strong>{name}</strong>
        </Box>
        <Text textAlign={size === "small" ? "center" : "start"}>
          {description}
        </Text>
        <Link to={`/services/${services[0].slug}`}>
          <Button primary>Learn More</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default StoryCard;
