import { Sidebar, Box, Image, Heading, Card, Anchor } from "grommet";
import { Facebook, Instagram, Tumblr, Twitter } from "grommet-icons";
import { Link } from "react-router-dom";
import brochure from "./brochure-sidebar.png";
const SidebarMain = () => {
  return (
    <Sidebar
      background="background-front"
      round="small"
      elevation="small"
      color="pink!"
      align="center"
      alignContent="center"
      height="large"
      pad="medium"
      gap="small"
    >
      <Box>
        <Heading level="3" alignSelf="center">
          Connect with us
        </Heading>
        <Box direction="row" gap="large" align="center" justify="evenly">
          <Anchor target="_blank" href="https://www.twitter.com">
            <Twitter color="text" size="large" />
          </Anchor>
          <Anchor target="_blank" href="https://www.facebook.com">
            <Facebook color="text" size="large" />
          </Anchor>
          <Link target="_blank" href="https://www.twitter.com">
            <Instagram color="text" size="large" />
          </Link>
          <Anchor target="_blank" href="https://www.snapchat.com">
            <Tumblr color="text" size="large" />
          </Anchor>
        </Box>
      </Box>
      <Box>
        <Heading alignSelf="center" level="3">
          Promotions
        </Heading>
        <Card align="center" margin="small">
          <Image src={brochure} fit="cover" />
        </Card>
      </Box>
    </Sidebar>
  );
};

export default SidebarMain;
