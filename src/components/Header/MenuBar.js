import React from "react";
import { Anchor, Box, Button } from "grommet";
import { Link } from "react-router-dom";
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
          <Phone color="brand" />
          <Anchor href="tel:214-625-2777" label="Call now" color="brand" />
        </Box>
      </Button>
      <Box
        direction="row"
        margin={{ horizontal: "xsmall" }}
        align="center"
        alignContent="center"
      >
        <Link to="/blogs">
          <Button icon={<Article />} />
        </Link>
        <Link to="/blogs">
          <Button icon={<FacebookOption />} />
        </Link>
        <Link to="/blogs">
          <Button icon={<Twitter />} />
        </Link>
        <Link to="/blogs">
          <Button icon={<Youtube />} />
        </Link>
      </Box>
    </Box>
  );
};

export default MenuBar;
