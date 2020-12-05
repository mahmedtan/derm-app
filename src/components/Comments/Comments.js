import React from "react";
import { Box, Heading } from "grommet";
import Comment from "./Comment";
import Slider from "react-slick";

const Comments = () => {
  const reviews = [
    {
      patientName: "Elisa Rone",
      remarks:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro sit eius cumque reprehenderit rem repellat veritatis a sed, inventore ab magnam cupiditate corrupti nihil quae harum. Possimus, magni ratione?",
    },
    {
      patientName: "Jane elis",
      remarks:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro sit eius cumque reprehenderit rem repellat veritatis a sed, inventore ab magnam cupiditate corrupti nihil quae harum. Possimus, magni ratione?",
    },
    {
      patientName: "Captain Hook",
      remarks:
        "  Lorem ipsum dolor sit amet consectetiquid porro sit eius cumque reprehenderit rem repellat veritatis a sed, inventore ab magnam cupiditate corrupti nihil quae harum. Possimus, magni ratione?",
    },
    {
      patientName: "Ryzen core",
      remarks:
        "  Lorem g elit. Aliquid porro sit eius cumque reprehenderit rem repellat veritatis a sed, inventore ab magnam cupiditate corrupti nihil quae harum. Possimus, magni ratione?",
    },
    {
      patientName: "James Moriarty",
      remarks:
        "  Lorem ipsum dolor sit. Aliquid porro sit eius cumque reprehendeitatis a sed, inventore ab magnam cupiditate corrupti nihil quae harum. Possimus, magni ratione?",
    },
  ];

  const settings = {
    slidesToScroll: 1,
    speed: 1000,
    arrows: false,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    fade: true,
    autoplay: true,
    dots: false,
  };

  return (
    <Box fill="horizontal" pad="large" background="background-contrast">
      <Heading alignSelf="center">Reviews</Heading>
      <Slider slidesToShow={1} {...settings}>
        {reviews.map((item) => (
          <Comment key={item.patientName} {...item} />
        ))}
      </Slider>
    </Box>
  );
};

export default Comments;
