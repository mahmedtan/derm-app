import { Box, ResponsiveContext } from "grommet";
import React, { useContext } from "react";
import StoryCard from "./StoryCard";

const StoryCards = () => {
  const size = useContext(ResponsiveContext);
  const description =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis nam possimus aspernatur. Maxime, corporis cumque vel, rerum earum ducimus, hic deleniti voluptate in temporibus ea illum provident odit eaque similique?";
  return (
    <Box width="100vw" gap="large" pad="large" align="start">
      <StoryCard
        image="https://images.unsplash.com/photo-1606757870492-9fc7cf1e736d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2735&q=80"
        title="Derm"
        description={description}
      />
      <StoryCard
        image="https://images.unsplash.com/photo-1509459276366-50507f1e29a6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2855&q=80"
        title="Injectables"
        description={description}
      />
      <StoryCard
        image="https://images.unsplash.com/photo-1606755910476-9a8bdab26131?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80"
        title="Sclerotherapy"
        description={description}
      />
      <StoryCard
        image="https://images.unsplash.com/photo-1606747332854-27f9a1d5a43b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
        title="PRP"
        description={description}
      />
    </Box>
  );
};

export default StoryCards;
