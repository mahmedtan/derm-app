import React from "react";
import { Anchor, Box, Button } from "grommet";
import {
  Article,
  FacebookOption,
  Phone,
  Twitter,
  Youtube,
} from "grommet-icons";

const MenuBar = () => {
  return (
    <Box
      direction="row"
      background="background-contrast"
      gap="xlarge"
      align="center"
      fill="horizontal"
      height="2.5rem"
      justify="between"
      pad={{ horizontal: "small" }}
    >
      <Button>
        <Box gap="small" direction="row">
          <Phone />
          <Anchor href="tel:214-625-2777" label="214-625-2777" />
        </Box>
      </Button>
      <Box direction="row" gap="medium" margin={{ horizontal: "xsmall" }}>
        <Article />
        <FacebookOption />
        <Twitter />
        <Youtube />
      </Box>
    </Box>
  );
};

export default MenuBar;
