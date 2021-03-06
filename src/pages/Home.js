import {
  Box,
  Button,
  ResponsiveContext,
  Main,
  Layer,
  Image,
  Stack,
} from "grommet";

import Newsletter from "../components/Utils/Newsletter";

import Slider from "../components/Slider/Slider";

import Pamphlet from "../components/Pamphlet/Pamphlet";
import StoryCards from "../components/StoryCards/StoryCards";
import RecentBlogs from "../components/RecentBlogs/RecentBlogs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Close, LinkNext, Shop } from "grommet-icons";
import Comments from "../components/Comments/Comments";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { getPopup } from "../services/extras";
import { toggleBanner } from "../reducers/bannerReducer";
import useScript from "../hooks/useScript";

const Home = () => {
  const blogs = useSelector((state) => state.blogs);
  const size = useContext(ResponsiveContext);
  const banner = useSelector(({ banner }) => banner);
  const uiTheme = useSelector(({ uiTheme }) => uiTheme);
  const dispatch = useDispatch();
  const [popup, setPopup] = useState(null);

  useEffect(() => {
    getPopup().then((res) => {
      setInterval(() => setPopup(res), 2000);
    });
  }, []);

  return (
    <Box>
      <Box>
        {banner && popup && Object.keys(popup).length && (
          <Layer
            responsive={false}
            margin="small"
            animate={false}
            className={"fade-in"}
            onEsc={() => dispatch(toggleBanner())}
            onClickOutside={() => dispatch(toggleBanner())}
          >
            <Stack anchor="top-right">
              <Link to="/book-now">
                <Box width="large">
                  <Image src={popup.avatar} />
                </Box>
              </Link>

              <Button
                label={<Close color="light-1" elevation="medium" />}
                onClick={() => dispatch(toggleBanner())}
                margin="small"
              />
            </Stack>
          </Layer>
        )}
      </Box>
      <Main overflow="hidden" align="center" fill>
        <Box
          align="center"
          justify="start"
          gap={size === "small" ? "xlarge" : "large"}
          margin={{ bottom: "large", top: size === "small" ? "large" : "none" }}
        >
          <Slider />
          <Box
            direction="row-responsive"
            gap={size === "small" ? "medium" : "small"}
            align="center"
            width="30rem"
            justify="center"
            margin={{ vertical: size === "small" ? "medium" : "none" }}
          >
            <Box alignSelf="center" flex>
              <Link to="/services">
                <Button
                  fill
                  label="Schedule Your Visit"
                  icon={<LinkNext />}
                  reverse
                  primary
                  size="large"
                  style={{ borderRadius: "25px" }}
                />
              </Link>
            </Box>

            <Box alignSelf="center" flex>
              <Link to="/services/skincare-products">
                <Button
                  fill
                  icon={
                    <Shop color={uiTheme === "light" ? "brand" : "#263040"} />
                  }
                  primary
                  color="brand-secondary"
                  reverse
                  style={{ color: uiTheme === "light" ? "#694F5D" : "#263040" }}
                  label="Skincare Products"
                  size="large"
                />
              </Link>
            </Box>
          </Box>
        </Box>
        <Pamphlet />
        <Newsletter />

        <StoryCards />
        <Comments />
        <RecentBlogs blogs={blogs} />
      </Main>
    </Box>
  );
};

export default Home;
