import { useState } from "react";
import { Layer, Button, Heading, Box, Image } from "grommet";
import { Menu, Close, Moon, Sun, User } from "grommet-icons";
import { Link } from "react-router-dom";

import LightLogo from "./logo-light.png";
import DarkLogo from "./logo-dark.png";

import MenuBar from "./MenuBar";
import AuthenticationBtn from "../Authentication/AuthenticationBtn";
import AuthenticationSnackbar from "../Authentication/AuthenticationSnackbar";

const Snackbar = ({ uiTheme }) => {
  const [show, setShow] = useState(false);

  return (
    <Box fill="horizontal">
      <MenuBar uiTheme={uiTheme} />
      <Box
        direction="row"
        gap="large"
        align="center"
        height="3.5rem"
        justify="around"
        fill="horizontal"
        pad={{ horizontal: "large" }}
        width="xlarge"
      >
        <Link to="/book-now">
          <Button primary label="Book" />
        </Link>
        <Link to="/">
          <Box overflow="hidden" height="xxsmall" width="9rem">
            <Image
              src={uiTheme === "light" ? LightLogo : DarkLogo}
              fit="cover"
            />
          </Box>
        </Link>
        <Button icon={<Menu />} onClick={() => setShow(true)} />
        {show && (
          <Layer
            position="right"
            background="background-front"
            onClickOutside={() => setShow(false)}
          >
            <Box pad="large" gap="small">
              <Button
                icon={<Close />}
                alignSelf="end"
                onClick={() => setShow(false)}
              />
              <Box
                fill="vertical"
                pad="small"
                align="center"
                overflow="auto"
                animation="fadeIn"
                gap="large"
              >
                <Box align="center" gap="large">
                  <Link to="/book-now" onClick={() => setShow(false)}>
                    <Button>
                      <Heading level="3" margin="none">
                        Book now
                      </Heading>
                    </Button>
                  </Link>
                  <Link
                    to="/services/dermatology"
                    onClick={() => setShow(false)}
                  >
                    <Button>
                      <Heading level="3" margin="none">
                        Dermatology
                      </Heading>
                    </Button>
                  </Link>
                  <Link
                    to="/services/injectables"
                    onClick={() => setShow(false)}
                  >
                    <Button>
                      <Heading level="3" margin="none">
                        Aesthetics
                      </Heading>
                    </Button>
                  </Link>
                  <Link to="/specials" onClick={() => setShow(false)}>
                    <Button>
                      <Heading level="3" margin="none">
                        Specials
                      </Heading>
                    </Button>
                  </Link>
                  <Link to="/services" onClick={() => setShow(false)}>
                    <Button>
                      <Heading level="3" margin="none">
                        Services
                      </Heading>
                    </Button>
                  </Link>
                  <Link to="/finance" onClick={() => setShow(false)}>
                    <Button>
                      <Heading level="3" margin="none">
                        Finance
                      </Heading>
                    </Button>
                  </Link>
                  <Link to="/contact-us" onClick={() => setShow(false)}>
                    <Button>
                      <Heading level="3" margin="none">
                        Contact us
                      </Heading>
                    </Button>
                  </Link>
                  <Link to="/About-us" onClick={() => setShow(false)}>
                    <Button>
                      <Heading level="3" margin="none">
                        About Us
                      </Heading>
                    </Button>
                  </Link>
                </Box>
              </Box>
              <Box alignSelf="center">
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
