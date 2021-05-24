import { Box, Text } from "grommet";
import React from "react";
import DisplayCard from "../../../components/Utils/DisplayCard";

const Consultations = ({ consultations, title }) => {
  if (!consultations.length) return null;
  const midConsults =
    consultations.length % 2 === 0
      ? consultations.length
      : consultations.length / 2 + 1;

  console.log(midConsults);

  return (
    <Box gap="large" align="center">
      <Text textAlign="center" size="xlarge" margin="medium">
        {title}
      </Text>
      <Box gap="large" direction="row-responsive" justify="center">
        <Box gap="large">
          {consultations.slice(0, midConsults).map((item) => (
            <DisplayCard {...item} key={item._id} item={item} />
          ))}
        </Box>
        {consultations.slice(midConsults).length > 0 && (
          <Box gap="large">
            {consultations.slice(midConsults).map((item) => (
              <DisplayCard {...item} key={item._id} item={item} />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Consultations;
