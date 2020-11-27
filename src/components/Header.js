import { Header, Button, Box, ResponsiveContext, Heading } from "grommet";
import { toggleUI } from "../reducers/uiThemeReducer";
import SnackBar from "./Snackbar";

import { Article, Group, Home, Moon, Sun } from "grommet-icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const NavHeader = () => {
  const dispatch = useDispatch();
  const uiTheme = useSelector(({ uiTheme }) => uiTheme);
  return (
    <div>
      <Header
        direction="row"
        align="center"
        elevation="small"
        flex="grow"
        fill="horizontal"
        focusIndicator={false}
        hoverIndicator={true}
        height="xxsmall"
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
            <Heading level={3} color="brand">
              Lorem, ipsum dolor.
            </Heading>
          </Link>
        </Box>

        <ResponsiveContext.Consumer>
          {(size) =>
            size === "small" ? (
              <SnackBar />
            ) : (
              <Box flex={true} direction="row" justify="center" align="center">
                <Link to="/">
                  <Button
                    hoverIndicator={true}
                    focusIndicator={false}
                    icon={<Home />}
                    a11yTitle="Home"
                  />
                </Link>

                <Link to="/blogs">
                  <Button
                    hoverIndicator={true}
                    focusIndicator={false}
                    a11yTitle="Blogs"
                    icon={<Article />}
                  />
                </Link>
                <Link to="/contact-us">
                  <Button
                    hoverIndicator={true}
                    focusIndicator={false}
                    a11yTitle="Contact us"
                    icon={<Group />}
                  />
                </Link>

                <Button
                  primary
                  label="Sign up"
                  margin={{ left: "large" }}
                  elevation="large"
                />
                <Button secondary label="Log in" margin={{ left: "small" }} />
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
