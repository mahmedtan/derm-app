import { ResponsiveContext, Box } from "grommet";
import { LinkNext, LinkPrevious } from "grommet-icons";
import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import Loading from "../../pages/Extras/Loading";

import SliderImage from "./SliderImage";

const ResponsiveSlider = () => {
  let services = useSelector(({ services }) => services);
  const size = useContext(ResponsiveContext);

  if (!services) return <Loading />;

  services = services.filter((service) => service.showOnSlider);

  const getNumOfItemsToShow = (size) => {
    return size === "small" ? 1 : 3;
  };
  const PrevArrow = (props) => (
    <LinkPrevious className={props.className} onClick={props.onClick} />
  );
  const NextArrow = (props) => (
    <LinkNext className={props.className} onClick={props.onClick} />
  );

  const settings = {
    slidesToScroll: size === "small" ? 1 : 3,
    speed: 2500,
    autoplaySpeed: 5000,
    swipe: true,
    pauseOnHover: true,
    arrows: size !== "small",
    autoplay: true,
    dots: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <Box width="xlarge" pad={{ horizontal: "medium" }}>
      <Slider slidesToShow={getNumOfItemsToShow(size)} {...settings}>
        {services
          .sort((a, b) => a.order - b.order)
          .map((service) => (
            <SliderImage key={service.slug} {...service} size={size} />
          ))}
      </Slider>
    </Box>
  );
};

export default ResponsiveSlider;
