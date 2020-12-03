import React from "react";
import { Box, Heading, Paragraph, Text } from "grommet";

const Comment = ({ patientName, remarks }) => {
  return (
    <Box align="center">
      <Paragraph weight="bold" size="xlarge" textAlign="center">
        <Text size="xxlarge">" </Text>
        {remarks}
        <Text size="xxlarge"> "</Text>
      </Paragraph>
      <Text weight="bold" size="xlarge">
        {patientName}
      </Text>
    </Box>
  );
};

export default Comment;
