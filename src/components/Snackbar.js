import { useState } from "react";
import { Layer, Button, Heading, Box } from "grommet";
import { Menu, Close, Moon, Sun } from "grommet-icons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleUI } from "../reducers/uiThemeReducer";
import MenuBar from "./MenuBar";

const Snackbar = ({ uiTheme }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  return (
    <Box>
      <MenuBar />
      <Box
        direction="row"
        gap="medium"
        align="center"
        height="3.5rem"
        justify="around"
        width="xlarge"
      >
        <Button
          focusIndicator={false}
          icon={uiTheme === "light" ? <Moon /> : <Sun />}
          onClick={() => {
            dispatch(toggleUI());
          }}
        />
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
              pad="medium"
              align="center"
              overflow="hidden"
              animation="fadeIn"
            >
              <Button
                icon={<Close />}
                alignSelf="end"
                onClick={() => setShow(false)}
              />

              <Link to="/services/derm" onClick={() => setShow(false)}>
                <Button>
                  <Heading level="2">Derm</Heading>
                </Button>
              </Link>
              <Link to="/services/aesthetics" onClick={() => setShow(false)}>
                <Button>
                  <Heading level="2">Aesthetics</Heading>
                </Button>
              </Link>
              <Link to="/specials" onClick={() => setShow(false)}>
                <Button>
                  <Heading level="2">Specials</Heading>
                </Button>
              </Link>
              <Link to="/services" onClick={() => setShow(false)}>
                <Button>
                  <Heading level="2">Services</Heading>
                </Button>
              </Link>
              <Link to="/finance" onClick={() => setShow(false)}>
                <Button>
                  <Heading level="2">Finance</Heading>
                </Button>
              </Link>
              <Link to="/contact-us" onClick={() => setShow(false)}>
                <Button>
                  <Heading level="2">Contact us</Heading>
                </Button>
              </Link>
            </Box>
          </Layer>
        )}
      </Box>
    </Box>
  );
};

export default Snackbar;
