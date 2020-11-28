import { ResponsiveContext, Box } from "grommet";
import { useContext } from "react";
import Slider from "react-slick";

import SliderImage from "./SliderImage";
const data = [
  {
    title: "Botox",
    imgSrc:
      "https://images.unsplash.com/photo-1606375820354-2f2171864ae8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
  },
  {
    title: "Fillers",
    imgSrc:
      "https://images.unsplash.com/photo-1606363099649-9675e44138d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
  },
  {
    title: "Sclerotherapy",
    imgSrc:
      "https://images.unsplash.com/photo-1606423203230-2d64c7acd38e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
  },
  {
    title: "PRP",
    imgSrc:
      "https://images.unsplash.com/photo-1606422360319-c1512f54d1b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=932&q=80",
  },
  {
    title: "Dermatology",
    imgSrc:
      "https://images.unsplash.com/photo-1606415405127-e751a0cac9d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=940&q=80",
  },
  {
    title: "Microneedling",
    imgSrc:
      "https://images.unsplash.com/photo-1606306629045-9fa8b195d32a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
  },
];

const ResponsiveSlider = () => {
  const size = useContext(ResponsiveContext);

  const getNumOfItemsToShow = (size) => {
    return size === "small" ? 1 : 3;
  };

  const settings = {
    slidesToScroll: size === "small" ? 1 : 3,
    speed: 1200,
    arrows: size !== "small",
    autoplay: true,
    dots: true,
  };

  return (
    <Box width="xlarge" pad="large">
      <Slider slidesToShow={getNumOfItemsToShow(size)} {...settings}>
        {data.map((item) => (
          <SliderImage key={item.title} {...item} size={size} />
        ))}
      </Slider>
    </Box>
  );
};

export default ResponsiveSlider;
