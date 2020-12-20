import { Footer, Text, Box, Image, Anchor, ResponsiveContext } from "grommet";
import { Article, Facebook, Instagram } from "grommet-icons";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Map from "./map.png";
const NavFooter = () => {
  const size = useContext(ResponsiveContext);
  return (
    <Footer
      as="footer"
      justify="between"
      direction="row-responsive"
      border="top"
      gap="medium"
      align="center"
      fill="horizontal"
      pad={size === "small" ? "large" : "medium"}
      gap="large"
      background={{ color: "background-front" }}
    >
      <Box
        align="center"
        gap={size === "small" ? "large" : "medium"}
        width="medium"
      >
        <Box gap="medium">
          <Text>
            Phone Number:{" "}
            <Anchor href="tel:(123) 456-7890">(123) 456-7890</Anchor>
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

      <Box align="center" gap="medium" width="medium">
        <Text>CHIC Derm & Aesthetics</Text>
        <Text>5717 Legacy Drive Plano, TX</Text>
        <Text>75024</Text>
      </Box>
      <Box width="medium">
        <Anchor href="https://goo.gl/maps/dRm6nvWnxMp8s2GG6" target="_blank">
          <Box height="small" round overflow="hidden" elevation="small" border>
            <Image src={Map} />
          </Box>
        </Anchor>
      </Box>
    </Footer>
  );
};

export default NavFooter;
