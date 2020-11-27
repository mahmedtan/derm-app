import React from "react";
import { Box, Main } from "grommet";
import Spinner from "./Spinner";

export default function Loading() {
  return (
    <Main>
      <Box
        direction="column"
        justify="center"
        align="center"
        margin={{ top: "xlarge" }}
        pad={{ top: "xlarge" }}
      >
        <Spinner />
      </Box>
    </Main>
  );
}
