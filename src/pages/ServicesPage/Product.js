import React from "react";
import { Box, Card, Heading, Image, ResponsiveContext, Text } from "grommet";
import { useContext } from "react";

const Product = ({ name, image, price }) => {
  const size = useContext(ResponsiveContext);
  return (
    <Box
      basis={size === "small" ? "1/2" : "1/3"}
      pad={size === "small" ? "medium" : "small"}
    >
      <Box elevation="large" height="18rem">
        <Box
          height="small"
          border={{
            color: "#eee",
            size: "1px",
            style: "solid",
            side: "bottom",
          }}
        >
          <Image src={image} fit="contain" />
        </Box>
        <Box
          pad={size === "small" ? "0.6rem" : "small"}
          align="start"
          justify="between"
          flex
        >
          <Box>
            <Text size="small">{name}</Text>
          </Box>

          <Text alignSelf="start" weight="bold">
            ${price}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Product;
