import React from "react";
import { Box, Paragraph, Text } from "grommet";
import { useState } from "react";
import { useEffect } from "react";
import { Star } from "grommet-icons";

const Comment = ({ patientName, remarks, rating }) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(i);
  }
  return (
    <Box align="center" gap="small">
      <Paragraph weight="bold" size="large" style={{ textAlign: "left" }}>
        {remarks}
      </Paragraph>
      <Box direction="row">
        {stars.map((item) => (
          <Star key={item} />
        ))}
      </Box>
      <Text weight="bold" size="xlarge">
        {patientName}
      </Text>
    </Box>
  );
};

export default Comment;
