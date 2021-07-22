import {
  Footer,
  Text,
  Box,
  Image,
  Anchor,
  ResponsiveContext,
  Button,
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
      fill="horizontal"
      direction="column"
      pad={size === "small" ? "xlarge" : "medium"}
      background={{ color: "background-front" }}
    >
      <Box
        align="center"
        gap={size === "small" || size === "medium" ? "large" : "small"}
      >
        <Box
          direction={size === "small" || size === "medium" ? "column" : "row"}
          gap="large"
          align="center"
          fill="horizontal"
          justify="center"
        >
          <Box width="medium" align="center" pad="medium" gap="medium">
            <Box
              align="center"
              border="between"
              width={{ min: "6rem" }}
              direction={
                size === "small" || size === "medium" ? "row" : "column"
              }
              gap={size === "small" ? "medium" : "small"}
            >
              <Link to="/" component={Anchor}>
                <Text color="brand" style={{ fontFamily: "Jost" }}>
                  Home
                </Text>
              </Link>

              <Link to="/services" component={Anchor}>
                <Text color="brand" style={{ fontFamily: "Jost" }}>
                  {" "}
                  Services
                </Text>
              </Link>

              <Link to="/specials" component={Anchor}>
                <Text color="brand" style={{ fontFamily: "Jost" }}>
                  {" "}
                  Specials
                </Text>
              </Link>

              <Link to="/finance" component={Anchor}>
                <Text color="brand" style={{ fontFamily: "Jost" }}>
                  {" "}
                  Finance
                </Text>
              </Link>
            </Box>
            <Box
              background="brand-tertiary"
              width={{ min: "6rem" }}
              align="center"
              pad={{ vertical: "xsmall" }}
            >
              <Link to="/book-now" component={Anchor}>
                <Text color="brand" style={{ fontFamily: "Jost" }}>
                  {" "}
                  Book Now
                </Text>
              </Link>
            </Box>
          </Box>

          <Box align="center" width="medium" justify="start">
            <Box align="center" margin={{ bottom: "small" }}>
              <Text size="large" weight="bold">
                CHIC
              </Text>
              <Text size="large" weight="bold">
                Derm & Aesthetics
              </Text>
            </Box>

            <Text>1312 West Exchange Pkwy,</Text>
            <Text> Suite 2130,</Text>
            <Text>Allen, Texas 75013</Text>
            <Box align="center" gap={size === "small" ? "large" : "medium"}>
              <Box>
                <Text textAlign="center">
                  Ph: <Anchor href="tel:(469) 466-2727">(469) 466-2727</Anchor>
                </Text>
                <Text>
                  Email:{" "}
                  <Anchor href="mailto:contact@mydermpa.com">
                    contact@mydermpa.com
                  </Anchor>
                </Text>
              </Box>

              <Box direction="row" gap="small" align="center">
                <Button
                  icon={<Facebook />}
                  href="https://www.facebook.com/Chic-Derm-Aesthetics-100979451932538/"
                  target="_blank"
                />
                <Button
                  icon={<Instagram />}
                  href="https://www.instagram.com/myderm_pa/"
                  target="_blank"
                />

                <Button icon={<Article />} href="/blogs" />
              </Box>
            </Box>
          </Box>
          <Box width="medium" align="center">
            <Anchor
              href="https://goo.gl/maps/PT6KXsp4qp3L8HvX8"
              target="_blank"
            >
              <Box
                height="15rem"
                width="20rem"
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

        <Box>
          <a
            href="https://verify.authorize.net/anetseal/?pid=aaed11ff-5256-4463-bc91-798bcd2cb8c0&rurl=https://www.mydermpa.com"
            target="_blank"
          >
            <Image src="https://verify.authorize.net/anetseal/images/secure90x72.gif" />
          </a>
        </Box>

        <Box align="center" gap="small">
          <Text size={size === "small" ? "small" : "medium"}>
            <Link to="/privacy-policy" component={Anchor}>
              Privacy Policy{" "}
            </Link>
          </Text>

          <Text>©{new Date().getFullYear()}, CHIC Derm & Aesthetics</Text>
        </Box>
      </Box>
    </Footer>
  );
};

export default NavFooter;
