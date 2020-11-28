import { Header, Button, Box, ResponsiveContext } from "grommet";
import { toggleUI } from "../../reducers/uiThemeReducer";
import SnackBar from "./Snackbar";

import {
  Article,
  Group,
  Home,
  Moon,
  Sun,
  Money,
  Services,
  Schedule,
  Gem,
} from "grommet-icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NavButton from "./NavButton";

const NavHeader = () => {
  const dispatch = useDispatch();
  const uiTheme = useSelector(({ uiTheme }) => uiTheme);
  return (
    <div>
      <Header
        direction="row"
        align="center"
        elevation="xsmall"
        flex="grow"
        fill="horizontal"
        focusIndicator={false}
        hoverIndicator={true}
        background="brand"
        height="4rem"
        responsive={true}
        as="header"
      >
        <Box
          flex={true}
          justify="center"
          align="center"
          margin={{ left: "small" }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button label="Lorem, ipsum dolor."></Button>
          </Link>
        </Box>

        <ResponsiveContext.Consumer>
          {(size) =>
            size === "small" ? (
              <SnackBar />
            ) : (
              <Box flex={true} direction="row" justify="center" align="center">
                <NavButton to="/" label="Home" icon={<Home />} />
                <NavButton
                  to="/services"
                  label="Services"
                  icon={<Services />}
                />
                <NavButton to="/specials" label="Specials" icon={<Gem />} />
                <NavButton to="/blogs" label="Blogs" icon={<Article />} />
                <NavButton to="/finance" label="Finance" icon={<Money />} />
                <NavButton
                  to="/contact-us"
                  label="Contact us"
                  icon={<Group />}
                />

                <Button
                  primary
                  color="background"
                  label="Book an appointment"
                  margin={{ left: "large" }}
                />
              </Box>
            )
          }
        </ResponsiveContext.Consumer>
        <Button
          focusIndicator={false}
          icon={uiTheme === "light" ? <Moon /> : <Sun />}
          onClick={() => dispatch(toggleUI())}
          alignSelf="center"
        />
      </Header>
    </div>
  );
};

export default NavHeader;
