import { Box, Heading, Image, ResponsiveContext } from "grommet";
import React from "react";
import Spinner from "../../components/Utils/Spinner";
import BlockContentMain from "../../components/Utils/BlockContentMain";
import Slider from "react-slick";

const AboutUs = ({ aboutUs }) => {
  const settings = {
    slidesToScroll: 1,
    swipe: true,
    speed: 1000,
    autoplaySpeed: 4000,
    swipeToScroll: true,
    arrows: false,
    autoplay: true,
  };

  if (!aboutUs) return <Spinner />;
  console.log(aboutUs.showSlider);

  return (
    <Box align="center" gap="large" animation="fadeIn" id="aboutusjs">
      <Box
        overflow="hidden"
        width="small"
        height="small"
        style={{ borderRadius: 100 }}
        elevation="medium"
      >
        <Image src={aboutUs.avatar} fit="cover" />
      </Box>

      <Box align="center" gap="small">
        <Heading margin="none" level="2">
          {aboutUs.title}
        </Heading>

        <BlockContentMain body={aboutUs.body} />

        {aboutUs.showSlider && (
          <Box width="35rem">
            <Slider {...settings}>
              {aboutUs.sliderImages.map((source) => (
                <Image src={source} key={source} />
              ))}
            </Slider>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default AboutUs;
