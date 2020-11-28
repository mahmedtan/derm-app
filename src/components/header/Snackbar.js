import { useState } from "react";
import { Layer, Button, Heading, Box } from "grommet";
import { Menu, Close } from "grommet-icons";
import { Link } from "react-router-dom";

const Snackbar = () => {
  const [show, setShow] = useState(false);
  return (
    <Box>
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

            <Link to="/services" onClick={() => setShow(false)}>
              <Button>
                <Heading level="2">Services</Heading>
              </Button>
            </Link>
            <Link to="/specials" onClick={() => setShow(false)}>
              <Button>
                <Heading level="2">Specials</Heading>
              </Button>
            </Link>
            <Link to="/blogs" onClick={() => setShow(false)}>
              <Button>
                <Heading level="2">Blogs</Heading>
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
            <Box gap="medium" width="medium" pad="xlarge">
              <Button primary label="Sign up" />
              <Button secondary label="Log in" />
            </Box>
          </Box>
        </Layer>
      )}
    </Box>
  );
};

export default Snackbar;
