import { Box, ResponsiveContext } from "grommet";
import React, { useContext } from "react";
import { useSelector } from "react-redux";
import StoryCard from "./StoryCard";
import Loading from "../../pages/Extras/Loading";

const StoryCards = () => {
  const serviceTypes = useSelector(({ serviceTypes }) => serviceTypes);
  const size = useContext(ResponsiveContext);
  if (!serviceTypes) {
    return <Loading />;
  }

  return (
    <Box
      fill="horizontal"
      gap={size === "small" ? "xlarge" : "large"}
      pad="large"
      align={size === "small" || size === "medium" ? "center" : "start"}
      background="background-contrast"
    >
      {serviceTypes
        .sort((a, b) => a.order - b.order)
        .map((serviceType) => (
          <StoryCard key={serviceType.slug} {...serviceType} />
        ))}
    </Box>
  );
};

export default StoryCards;
