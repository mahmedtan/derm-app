import { Box, ResponsiveContext } from "grommet";
import React, { useContext, useEffect, useState } from "react";
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
      gap="large"
      pad="large"
      align={size === "small" ? "center" : "start"}
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
