import React from "react";
import { Box, ResponsiveContext, Text } from "grommet";

import { Star } from "grommet-icons";
import { useContext } from "react";

const Comment = ({ patientName, remarks, rating }) => {
  const size = useContext(ResponsiveContext);
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(i);
  }
  return (
    <Box
      align="center"
      justify="center"
      height={size === "small" ? "medium" : "16rem"}
    >
      <Box align="center" gap="small" width="large">
        <Text size="large" style={{ textAlign: "center" }}>
          {remarks}
        </Text>
        <Box direction="row">
          {stars.map((item) => (
            <Star key={item} />
          ))}
        </Box>
        <Text weight="bold" size="xlarge">
          {patientName}
        </Text>
      </Box>
    </Box>
  );
};

export default Comment;
