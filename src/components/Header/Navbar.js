import React from "react";
import { Button, Box, Stack, Image } from "grommet";
import { Link } from "react-router-dom";
import NavButton from "./NavButton";
import MenuBar from "./MenuBar";
import AuthenticationBtn from "../Authentication/AuthenticationBtn";
import Logo1 from "./40.png";
import Logo2 from "./41.png";
import Logo3 from "./logo3.png";
import Logo4 from "./Chic.png";

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

            <NavButton to="/services/medical-derm" label="Dermatology" />
            <NavButton to="/services/botox" label="Aesthetics" />
            <NavButton to="/specials" label="Specials" />
          </Box>
          <Link to="/">
            <Box overflow="hidden" height="xxsmall" width="9rem">
              <Image src={Logo4} fit="cover" />
            </Box>
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
