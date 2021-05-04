import React, { useContext } from "react";
import { Box, Button, Image, Text, ResponsiveContext } from "grommet";
import { Link } from "react-router-dom";

const StoryCard = ({ image, name, description, services }) => {
  const size = useContext(ResponsiveContext);

  return (
    <Box
      direction="row-responsive"
      align="center"
      gap={size === "small" ? "medium" : "none"}
      margin={{
        horizontal: size === "small" || size === "medium" ? "none" : "16vw",
      }}
    >
      <Box
        round="full"
        overflow="hidden"
        width={size === "small" || size === "medium" ? "small" : "15rem"}
        height={size === "small" || size === "medium" ? "small" : "15rem"}
        margin={{
          horizontal: "large",
          left: size === "medium" ? "none" : "large",
        }}
        elevation="large"
        alignSelf="center"
      >
        <Image src={image} fit="cover" />
      </Box>

      <Box
        width="medium"
        gap={size === "small" || size === "medium" ? "medium" : "small"}
        align={size === "small" ? "center" : "start"}
      >
        <Box style={{ fontFamily: "nunito", fontSize: "1.5rem" }}>
          <strong>{name}</strong>
        </Box>
        <Text style={{ textAlign: "justify" }}>{description}</Text>
        <Link
          to={`/services/${
            services.sort((a, b) => a.orderAccordian - b.orderAccordian)[0].slug
          }`}
        >
          <Button primary>Learn More</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default StoryCard;
