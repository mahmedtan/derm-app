import { Sidebar, Box, Image, Heading, Card, Anchor } from "grommet";
import { Facebook, Instagram, Tumblr, Twitter } from "grommet-icons";
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
          <Anchor target="_blank" href="https://www.twitter.com">
            <Instagram color="text" size="large" />
          </Anchor>
          <Anchor target="_blank" href="https://www.snapchat.com">
            <Tumblr color="text" size="large" />
          </Anchor>
        </Box>
      </Box>
      <Box>
        <Heading alignSelf="center" level="3">
          Promotions
        </Heading>
      </Box>
    </Sidebar>
  );
};

export default SidebarMain;
