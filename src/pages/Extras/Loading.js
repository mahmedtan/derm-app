import React from "react";
import { Box, Main } from "grommet";
import Spinner from "../../components/Utils/Spinner";
import { useSelector } from "react-redux";

export default function Loading() {
  const uiTheme = useSelector(({ uiTheme }) => uiTheme);
  return (
    <Main>
      <Box
        direction="column"
        justify="center"
        align="center"
        height="large"
        background={uiTheme === "light" ? "white" : "#263040"}
      >
        <Spinner color={uiTheme === "light" ? "black" : "whitesmoke"} />
      </Box>
    </Main>
  );
}
