import React, { useContext } from "react";
import { Box, ResponsiveContext } from "grommet";
import Item from "./Item";

const Column = ({ services }) => {
  const size = useContext(ResponsiveContext);

  return (
    <Box gap={size === "small" ? "xlarge" : "medium"}>
      {services.map((servType) => (
        <Item servType={servType} key={servType.slug} />
      ))}
    </Box>
  );
};

export default Column;
