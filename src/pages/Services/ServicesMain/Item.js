import React, { useState } from "react";
import { Box, Text, Layer, Heading, Stack, Anchor } from "grommet";
import { Link } from "react-router-dom";

const Item = ({ servType }) => {
  const [shown, setShown] = useState(false);

  return (
    <Box
      width="20rem"
      height="20rem"
      background={shown ? "#dbced1" : "#F1E4E7"}
      align="center"
      round="small"
      justify="center"
      elevation="small"
      onMouseEnter={() => setShown(true)}
      onClick={() => {
        setShown(true);
      }}
      onMouseLeave={() => {
        setShown(false);
      }}
    >
      {shown ? (
        <Box gap="medium" animation="zoomOut" overflow="hidden">
          {servType.services.map((service) => (
            <Link
              to={`/services/${service.slug}`}
              key={service._id}
              component={Anchor}
            >
              <Text size="xlarge">{service.name}</Text>
            </Link>
          ))}
        </Box>
      ) : (
        <Box animation="zoomIn">
          <Text size="xxlarge"> {servType.name}</Text>
        </Box>
      )}
    </Box>
  );
};

export default Item;
