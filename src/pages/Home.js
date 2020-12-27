import { Box, Button, ResponsiveContext, Main } from "grommet";
import Newsletter from "../components/Utils/Newsletter";

import Slider from "../components/Slider/Slider";

import Pamphlet from "../components/Pamphlet/Pamphlet";
import StoryCards from "../components/StoryCards/StoryCards";
import RecentBlogs from "../components/RecentBlogs/RecentBlogs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LinkNext } from "grommet-icons";
import Comments from "../components/Comments/Comments";
import { useContext } from "react";

const Home = () => {
  const blogs = useSelector((state) => state.blogs);
  const size = useContext(ResponsiveContext);

  return (
    <Main animation="fadeIn" overflow="hidden" align="center" fill>
      <Box
        align="center"
        justify="start"
        gap={size === "small" ? "xlarge" : "large"}
        height="85vh"
        margin={{ vertical: size === "small" ? "large" : "small" }}
      >
        <Slider />
        <Link to="/services">
          <Button
            label="Schedule Your Visit"
            icon={<LinkNext />}
            reverse
            margin={{ vertical: size === "small" ? "medium" : "none" }}
            primary
            size="large"
            style={{ borderRadius: "25px" }}
          />
        </Link>
      </Box>
      <Pamphlet />

      <Newsletter />
      <StoryCards />
      <Comments />
      <RecentBlogs blogs={blogs} />
    </Main>
  );
};

export default Home;
