import React, { useContext } from "react";
import { Card, Box, Text, Paragraph, ResponsiveContext } from "grommet";
const DisplayCard = ({ title, price, time, description }) => {
  const size = useContext(ResponsiveContext);
  return (
    <Card
      pad={size === "small" ? "large" : "medium"}
      justify="center"
      elevation="none"
      border
      round={size === "small" ? "medium" : "small"}
    >
      <Box direction="row" justify="between">
        <Text size="large">{title}</Text>
        <Text>
          <em>{`${time} min`}</em>
        </Text>
      </Box>

      <Paragraph>{description}</Paragraph>
      <Box direction="row" align="center" justify="between">
        <Text weight="bold">{`$${price}`}</Text>
      </Box>
    </Card>
  );
};

export default DisplayCard;
