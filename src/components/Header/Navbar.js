import React from "react";
import { Box, Stack, Image } from "grommet";
import { Link } from "react-router-dom";
import NavButton from "./NavButton";
import MenuBar from "./MenuBar";
import AuthenticationBtn from "../Authentication/AuthenticationBtn";

import LightLogo from "./logo-light.png";
import DarkLogo from "./logo-dark.png";

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
            <NavButton to="/book-now" label="Book Now" />

            <NavButton to="/services/dermatology" label="Dermatology" />
            <NavButton to="/services/injectables" label="Aesthetics" />
            <NavButton to="/specials" label="Specials" />
          </Box>
          <Link to="/">
            <Box overflow="hidden" height="xxsmall" width="9rem">
              <Image
                src={uiTheme === "light" ? LightLogo : DarkLogo}
                fit="cover"
              />
            </Box>
          </Link>
          <Box direction="row" gap="medium">
            <NavButton to="/services" label="Services" />
            <NavButton to="/about-us" label="About Us" />
            <NavButton to="/contact-us" label="Contact Us" />

            <NavButton to="/finance" label="Finance" />
          </Box>
        </Box>
        <AuthenticationBtn />
      </Stack>
    </Box>
  );
};

export default Navbar;
