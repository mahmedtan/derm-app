import React from "react";
import { Box, Main } from "grommet";
import Spinner from "../components/Loading/Spinner";

export default function Loading() {
  return (
    <Main>
      <Box direction="column" justify="center" align="center" height="large">
        <Spinner />
      </Box>
    </Main>
  );
}
