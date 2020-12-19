import { Box, Button } from "grommet";
import Newsletter from "../components/Utils/Newsletter";

import Slider from "../components/Slider/Slider";

import Pamphlet from "../components/Pamphlet/Pamphlet";
import StoryCards from "../components/StoryCards/StoryCards";
import RecentBlogs from "../components/RecentBlogs/RecentBlogs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LinkNext } from "grommet-icons";
import Comments from "../components/Comments/Comments";

const Home = () => {
  const blogs = useSelector((state) => state.blogs);

  return (
    <Box animation="fadeIn" overflow="hidden" align="center" fill>
      <Box width="100vw" height="88vh" align="center" justify="evenly">
        <Slider />
        <Link to="/services">
          <Button
            label="Schedule your visit"
            icon={<LinkNext />}
            reverse
            primary
            size="large"
            style={{ borderRadius: "25px" }}
          />
        </Link>
      </Box>
      <Pamphlet />
      <StoryCards />

      <RecentBlogs blogs={blogs} />
      <Comments />
      <Newsletter />
    </Box>
  );
};

export default Home;
