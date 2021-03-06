import React, { useEffect, useState } from "react";
import { Box, Heading } from "grommet";
import Comment from "./Comment";
import Slider from "react-slick";
import { getComments } from "../../services/comments";
import Spinner from "../Utils/Spinner";

const Comments = () => {
  const [remarks, setRemarks] = useState(null);

  const settings = {
    slidesToScroll: 1,
    speed: 1000,
    arrows: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    fade: true,
    autoplay: true,
    dots: false,
  };
  useEffect(() => {
    getComments().then((res) => res && setRemarks(res));
  }, []);

  if (!remarks) return <Spinner />;
  return (
    <Box fill="horizontal" pad="large" background="background-back">
      <Heading alignSelf="center" level="2">
        Reviews
      </Heading>
      <Slider slidesToShow={1} {...settings}>
        {remarks.map((item) => (
          <Comment key={item._id} {...item} />
        ))}
      </Slider>
    </Box>
  );
};

export default Comments;
