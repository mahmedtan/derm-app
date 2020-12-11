import React from "react";
import { Anchor, Box, Button } from "grommet";
import { Link } from "react-router-dom";
import {
  Article,
  FacebookOption,
  Phone,
  Twitter,
  User,
  Youtube,
} from "grommet-icons";
import { Moon, Sun } from "grommet-icons";
import { toggleUI } from "../../reducers/uiThemeReducer";
import { useDispatch } from "react-redux";

const MenuBar = ({ uiTheme }) => {
  const dispatch = useDispatch();
  return (
    <Box
      direction="row"
      background="background-contrast"
      gap="xlarge"
      align="center"
      fill="horizontal"
      height="2.5rem"
      justify="between"
      pad={{ horizontal: "medium" }}
    >
      <Box direction="row">
        <Button href="tel:214-625-2777" icon={<Phone />} />
        <Button
          icon={uiTheme === "light" ? <Moon /> : <Sun />}
          onClick={() => {
            dispatch(toggleUI());
          }}
        />
      </Box>

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
