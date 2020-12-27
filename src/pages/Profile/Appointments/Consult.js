import { Box, Text } from "grommet";
import React from "react";
import DisplayCard from "../../../components/Utils/DisplayCard";

const Consultations = ({ consultations, title }) => {
  if (!consultations.length) return null;

  return (
    <Box gap="large" align="center">
      <Text textAlign="center" size="xlarge" margin="medium">
        {title}
      </Text>
      <Box gap="large" direction="row-responsive" justify="center">
        <Box gap="large">
          {consultations.slice(0, consultations.length / 2 + 1).map((item) => (
            <DisplayCard {...item} key={item._id} item={item} />
          ))}
        </Box>
        {consultations.slice(consultations.length / 2 + 1).length > 0 && (
          <Box gap="large">
            {consultations.slice(consultations.length / 2 + 1).map((item) => (
              <DisplayCard {...item} key={item._id} item={item} />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Consultations;
