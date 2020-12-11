import { Box, Text } from "grommet";
import React from "react";
import DisplayCard from "../../components/Utils/DisplayCard";

const Consultations = ({ consultations, title }) => {
  if (!consultations) return null;
  return (
    <Box gap="large" align="center">
      <Text textAlign="center" size="xlarge">
        {title}
      </Text>
      <Box gap="large" direction="row-responsive">
        <Box gap="large">
          {consultations.slice(0, consultations.length / 2 + 1).map((item) => (
            <DisplayCard {...item} key={item._id} item={item} />
          ))}
        </Box>
        <Box gap="large">
          {consultations.slice(consultations.length / 2 + 1).map((item) => (
            <DisplayCard {...item} key={item._id} item={item} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Consultations;
