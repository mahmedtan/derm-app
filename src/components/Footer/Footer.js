import {
  Footer,
  Text,
  Box,
  Image,
  Anchor,
  ResponsiveContext,
  Heading,
} from "grommet";
import { Article, Facebook, Instagram } from "grommet-icons";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Map from "./map.png";
const NavFooter = () => {
  const size = useContext(ResponsiveContext);
  return (
    <Footer
      as="footer"
      border="top"
      direction="column"
      gap={size === "small" ? "large" : "small"}
      pad={size === "small" ? "large" : "medium"}
      background={{ color: "background-front" }}
      margin={{ bottom: size === "small" ? "xlarge" : "none" }}
    >
      <Box
        direction="row-responsive"
        gap="large"
        align="center"
        fill="horizontal"
        justify="center"
      >
        <Box width="medium" align="center" justify="start">
          <Text size="large" margin={{ bottom: "small" }}>
            Navigation
          </Text>
          <Box align="center">
            <Link to="/" component={Anchor}>
              Home
            </Link>
            <Link to="/services" component={Anchor}>
              Services
            </Link>
            <Link to="/specials" component={Anchor}>
              Specials
            </Link>
            <Link to="/finance" component={Anchor}>
              Finance
            </Link>
            <Link to="/book-now" component={Anchor}>
              Book Now
            </Link>
          </Box>
        </Box>
        <Box align="center" width="medium" justify="start">
          <Box align="center" margin={{ bottom: "small" }}>
            <Text size="large">CHIC</Text>
            <Text size="large">Derm & Aesthetics</Text>
          </Box>

          <Text>5717 Legacy Drive Plano</Text>
          <Text>TX, 75024</Text>
          <Box align="center" gap={size === "small" ? "large" : "medium"}>
            <Box>
              <Text textAlign="center">
                Ph: <Anchor href="tel:(123) 456-7890">(123) 456-7890</Anchor>
              </Text>
              <Text>
                Email:{" "}
                <Anchor href="mailto:contact@mydermpa.com">
                  contact@mydermpa.com
                </Anchor>
              </Text>
            </Box>

            <Box direction="row" gap="medium" align="center">
              <Facebook />
              <Instagram />
              <Article />
            </Box>
          </Box>
        </Box>
        <Box width="medium" align="center">
          <Anchor href="https://goo.gl/maps/dRm6nvWnxMp8s2GG6" target="_blank">
            <Box
              height="15rem"
              width="15rem"
              round="small"
              overflow="hidden"
              elevation="small"
              border
            >
              <Image src={Map} fit="cover" />
            </Box>
          </Anchor>
        </Box>
      </Box>

      <Box margin={{ bottom: size === "small" ? "xlarge" : "none" }}>
        ©{new Date().getFullYear()}, CHIC Derm & Aesthetics
      </Box>
    </Footer>
  );
};

export default NavFooter;
