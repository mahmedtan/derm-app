import { Box, Button, Heading, Text } from "grommet";
import Newsletter from "../components/Newsletter";

import Slider from "../components/Slider";

import Pamphlet from "../components/Pamphlet";
import { LinkDown } from "grommet-icons";
import StoryCards from "../components/StoryCards";
import RecentBlogs from "../components/RecentBlogs";
import { useSelector } from "react-redux";

const Home = () => {
  const blogs = useSelector((state) => state.blogs);

  return (
    <Box animation="fadeIn" overflow="hidden" align="center" gap="large">
      <Box
        width="100vw"
        height="85vh"
        align="center"
        gap="small"
        justify="evenly"
      >
        <Slider />

        <LinkDown size="large" />
      </Box>
      <Pamphlet />
      <StoryCards />

      <RecentBlogs blogs={blogs} />

      <Box pad="large">
        <Newsletter />
      </Box>
    </Box>
  );
};

export default Home;
