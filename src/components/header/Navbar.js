import React from "react";
import { Button, Box, Stack } from "grommet";
import { Moon, Sun } from "grommet-icons";
import { toggleUI } from "../../reducers/uiThemeReducer";
import { Link } from "react-router-dom";
import NavButton from "./NavButton";
import { useDispatch } from "react-redux";
import MenuBar from "./MenuBar";
const Navbar = ({ uiTheme }) => {
  const dispatch = useDispatch();

  return (
    <Box width="full" height="full">
      <MenuBar />

      <Stack anchor="right">
        <Box
          height="3.5rem"
          flex={true}
          direction="row"
          justify="center"
          align="center"
          gap="xlarge"
        >
          <Box direction="row" gap="small">
            <NavButton to="/services/derm" label="Derm" />
            <NavButton to="/services/aesthetics" label="Aesthetics" />
            <NavButton to="/specials" label="Specials" />
          </Box>

          <Link to="/">
            <Button size="large" color="brand" margin={{ horizontal: "small" }}>
              Lorem ipsum dolor sit.
            </Button>
          </Link>

          <Box direction="row" gap="small">
            <NavButton to="/services" label="Services" />
            <NavButton to="/finance" label="Finance" />
            <NavButton to="/services" label="Contact us" />
          </Box>
        </Box>
        <Box direction="row" margin={{ horizontal: "medium" }} gap="large">
          <Box direction="row">
            <Button
              focusIndicator={false}
              icon={uiTheme === "light" ? <Moon /> : <Sun />}
              onClick={() => dispatch(toggleUI())}
              alignSelf="center"
            />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default Navbar;
