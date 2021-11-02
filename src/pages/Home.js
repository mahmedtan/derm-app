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
import { Helmet } from "react-helmet";

const Home = () => {
  const blogs = useSelector((state) => state.blogs);
  const size = useContext(ResponsiveContext);
  const banner = useSelector(({ banner }) => banner);
  const uiTheme = useSelector(({ uiTheme }) => uiTheme);
  const dispatch = useDispatch();
  const [popup, setPopup] = useState(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    getPopup().then((res) => setPopup(res));
  }, []);

  return (
    <>
      <Helmet>
        <title>Dermatology | Aesthetics | Anti-aging Skin Care </title>
        <meta
          name="description"
          content="Chic Derm & Aesthetics serving Allen area specializes in non-invasive cosmetic procedures such as Injectables, Dermal Fillers, RF+Microneedling and HIFU. Consult with our skin care specialists today."
        />
      </Helmet>

      <Box animation={{ type: "fadeIn", duration: "1500" }}>
        {banner && popup && Object.keys(popup).length && (
          <Layer
            responsive={false}
            margin="small"
            animate={false}
            className={"fade-in"}
            onEsc={() => dispatch(toggleBanner())}
            style={load ? {} : { display: "none" }}
            onClickOutside={() => dispatch(toggleBanner())}
          >
            <Stack anchor="top-right">
              <Link to="https://www.eventbrite.com/e/grand-opening-chic-derm-aesthetics-come-join-us-and-enjoy-food-gifts-registration-200913897877">
                <Box width="large">
                  <Image src={popup.avatar} onLoad={() => setLoad(true)} />
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
        <Main overflow="hidden" align="center" fill>
          <Box
            align="center"
            justify="start"
            gap={size === "small" ? "xlarge" : "large"}
            margin={{
              bottom: "large",
              top: size === "small" ? "large" : "none",
            }}
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
                    style={{
                      color: uiTheme === "light" ? "#694F5D" : "#263040",
                    }}
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
    </>
  );
};

export default Home;
