import React from "react";
import { Button, Box, Stack } from "grommet";
import { Link } from "react-router-dom";
import NavButton from "./NavButton";
import MenuBar from "./MenuBar";
import AutheticationBtn from "../Authentication.js/AutheticationBtn";

const Navbar = ({ uiTheme }) => {
  return (
    <Box width="full" height="full">
      <MenuBar uiTheme={uiTheme} />

      <Stack anchor="right">
        <Box
          height="3.5rem"
          flex={true}
          direction="row"
          justify="center"
          align="center"
          gap="large"
        >
          <Box direction="row" gap="small">
            <NavButton to="/services/derm" label="Derm" />
            <NavButton to="/services/aesthetics" label="Aesthetics" />
            <NavButton to="/specials" label="Specials" />
          </Box>
          <Link to="/">
            <Button color="brand" size="large">
              Lorem ipsum dolor sit.
            </Button>
          </Link>
          <Box direction="row" gap="small">
            <NavButton to="/services" label="Services" />
            <NavButton to="/finance" label="Finance" />
            <NavButton to="/services" label="Contact us" />
          </Box>
        </Box>
        <AutheticationBtn />
      </Stack>
    </Box>
  );
};

export default Navbar;
