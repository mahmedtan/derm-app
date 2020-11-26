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
          full="vertical"
          position="right"
          modal
          onClickOutside={() => setShow(false)}
        >
          <Box
            fill="vertical"
            pad="medium"
            width="medium"
            flex
            overflow="auto"
            animation="fadeIn"
          >
            <Box
              flex
              direction="column"
              justify="start"
              gap="large"
              align="center"
            >
              <Button
                icon={<Close />}
                alignSelf="end"
                onClick={() => setShow(false)}
              />

              <Link
                to="/blogs"
                style={{ textDecoration: "none" }}
                onClick={() => setShow(false)}
              >
                <Heading color="brand">Blogs</Heading>
              </Link>
              <Link
                to="/contact-us"
                style={{ textDecoration: "none" }}
                onClick={() => setShow(false)}
              >
                <Heading color="brand">Contact us</Heading>
              </Link>

              <br />
              <Button primary label="Sign up" alignSelf="center" />
              <Button secondary label="Log in" alignSelf="center" />
            </Box>
          </Box>
        </Layer>
      )}
    </Box>
  );
};

export default Snackbar;
