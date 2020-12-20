import React from "react";
import { Button, Box, Stack } from "grommet";
import { Link } from "react-router-dom";
import NavButton from "./NavButton";
import MenuBar from "./MenuBar";
import AuthenticationBtn from "../Authentication/AuthenticationBtn";

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
          <Box direction="row" gap="medium">
            <NavButton to="/about-us" label="About us" />

            <NavButton to="/services/alopea" label="Dermatology" />
            <NavButton to="/services/botox" label="Aesthetics" />
            <NavButton to="/specials" label="Specials" />
          </Box>
          <Link to="/">
            <Button color="brand" size="large">
              Lorem ipsum dolor sit.
            </Button>
          </Link>
          <Box direction="row" gap="medium">
            <NavButton to="/services" label="Services" />
            <NavButton to="/finance" label="Finance" />
            <NavButton to="/contact-us" label="Contact us" />
            <NavButton to="/book-now" label="Book Now" />
          </Box>
        </Box>
        <AuthenticationBtn />
      </Stack>
    </Box>
  );
};

export default Navbar;
