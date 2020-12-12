import { useState } from "react";
import { Layer, Button, Heading, Box } from "grommet";
import { Menu, Close, Moon, Sun, User } from "grommet-icons";
import { Link } from "react-router-dom";

import MenuBar from "./MenuBar";
import AuthenticationBtn from "../Authentication/AuthenticationBtn";
import AuthenticationSnackbar from "../Authentication/AuthenticationSnackbar";

const Snackbar = ({ uiTheme }) => {
  const [show, setShow] = useState(false);

  return (
    <Box>
      <MenuBar uiTheme={uiTheme} />
      <Box
        direction="row"
        gap="large"
        align="center"
        height="3.5rem"
        justify="center"
        width="xlarge"
      >
        <AuthenticationSnackbar />
        <Link to="/">
          <Button size="large" color="brand">
            Lorem ipsum dolor.
          </Button>
        </Link>
        <Button icon={<Menu />} onClick={() => setShow(true)} />
        {show && (
          <Layer
            position="right"
            background="background-front"
            onClickOutside={() => setShow(false)}
          >
            <Box
              fill="vertical"
              pad="large"
              align="center"
              overflow="hidden"
              animation="fadeIn"
              justify="between"
            >
              <Button
                icon={<Close />}
                alignSelf="end"
                onClick={() => setShow(false)}
              />
              <Box align="center">
                <Link to="/services/derm" onClick={() => setShow(false)}>
                  <Button>
                    <Heading level="3">Derm</Heading>
                  </Button>
                </Link>
                <Link to="/services/aesthetics" onClick={() => setShow(false)}>
                  <Button>
                    <Heading level="3">Aesthetics</Heading>
                  </Button>
                </Link>
                <Link to="/specials" onClick={() => setShow(false)}>
                  <Button>
                    <Heading level="3">Specials</Heading>
                  </Button>
                </Link>
                <Link to="/services" onClick={() => setShow(false)}>
                  <Button>
                    <Heading level="3">Services</Heading>
                  </Button>
                </Link>
                <Link to="/finance" onClick={() => setShow(false)}>
                  <Button>
                    <Heading level="3">Finance</Heading>
                  </Button>
                </Link>
                <Link to="/contact-us" onClick={() => setShow(false)}>
                  <Button>
                    <Heading level="3">Contact us</Heading>
                  </Button>
                </Link>
              </Box>
              <Box margin="large">
                <AuthenticationBtn />
              </Box>
            </Box>
          </Layer>
        )}
      </Box>
    </Box>
  );
};

export default Snackbar;
