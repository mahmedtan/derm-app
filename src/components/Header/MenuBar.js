import React from "react";
import { Box, Button } from "grommet";
import { Link } from "react-router-dom";
import { Article, Facebook, Instagram, Money, Phone } from "grommet-icons";
import { Moon, Sun } from "grommet-icons";
import { toggleUI } from "../../reducers/uiThemeReducer";
import { useDispatch } from "react-redux";

const MenuBar = ({ uiTheme }) => {
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
        <form
          name="PrePage"
          target="_blank"
          method="post"
          action="https://Simplecheckout.authorize.net/payment/CatalogPayment.aspx"
        >
          <input
            type="hidden"
            name="LinkId"
            value="8804e2eb-087b-4bd0-b240-2f9a99475849"
          />

          <Button
            type="submit"
            margin={{ horizontal: "xsmall" }}
            label="$"
            style={{
              fontSize: "1.6rem",
              fontWeight: "400",
              fontFamily: "sans-serif",
            }}
            target="_blank"
          />
        </form>

        <Button href="tel:(469) 466-2727" icon={<Phone />} />
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
