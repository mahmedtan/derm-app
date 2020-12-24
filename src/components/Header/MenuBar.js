import React, { useContext } from "react";
import { Anchor, Box, Button, ResponsiveContext } from "grommet";
import { Link } from "react-router-dom";
import {
  Article,
  Facebook,
  FacebookOption,
  Instagram,
  Phone,
  Twitter,
  User,
  Youtube,
} from "grommet-icons";
import { Moon, Sun } from "grommet-icons";
import { toggleUI } from "../../reducers/uiThemeReducer";
import { useDispatch } from "react-redux";

const MenuBar = ({ uiTheme }) => {
  const size = useContext(ResponsiveContext);
  const dispatch = useDispatch();
  return (
    <Box
      direction="row"
      background="brand-secondary"
      gap="xlarge"
      align="center"
      fill="horizontal"
      height="2.5rem"
      justify="between"
      pad={{ horizontal: "medium" }}
    >
      <Box
        direction="row"
        margin={{ horizontal: "small" }}
        align="center"
        alignContent="center"
      >
        <Button
          icon={<Facebook />}
          target="_blank"
          href="https://www.facebook.com/Chic-Derm-Aesthetics-100979451932538/"
        />
        <Button
          icon={<Instagram />}
          target="_blank"
          href="https://www.instagram.com/myderm_pa/"
        />

        <Link to="/blogs">
          <Button icon={<Article />} />
        </Link>
      </Box>
      <Box direction="row" margin={{ horizontal: "small" }}>
        <Button href="tel:214-625-2777" icon={<Phone />} />
        <Button
          icon={uiTheme === "light" ? <Moon /> : <Sun />}
          onClick={() => {
            dispatch(toggleUI());
          }}
        />
      </Box>
    </Box>
  );
};

export default MenuBar;
