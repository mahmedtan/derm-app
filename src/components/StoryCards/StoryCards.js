import { Box } from "grommet";
import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import StoryCard from "./StoryCard";
import Loading from "../../pages/Extras/Loading";

const StoryCards = () => {
  const serviceTypes = useSelector(({ serviceTypes }) => serviceTypes);
  if (!serviceTypes) {
    return <Loading />;
  }

  return (
    <Box
      width="100vw"
      gap="large"
      pad="large"
      align="start"
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
