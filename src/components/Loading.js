import React from "react";
import { Coffee } from "grommet-icons";
import { Box, Heading, Main } from "grommet";

export default function Loading() {
  return (
    <Main>
      <Box
        direction="column"
        justify="center"
        align="center"
        margin="large"
        pad="xlarge"
      >
        <Heading>Loading</Heading>
        <Box animation="pulse">
          <Coffee size="xlarge" />
        </Box>
      </Box>
    </Main>
  );
}
