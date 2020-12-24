import React, { useState } from "react";
import { Box, Text, Layer, Heading, Stack, Anchor } from "grommet";
import { Link } from "react-router-dom";

const Item = ({ servType }) => {
  const [shown, setShown] = useState(false);

  return (
    <Box
      width="20rem"
      height="20rem"
      background={
        shown
          ? { color: servType.backgroundColor, opacity: "strong" }
          : servType.backgroundColor
      }
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
          {servType.services
            .sort((a, b) => a.orderAccordian - b.orderAccordian)
            .map((service) => (
              <Link
                to={`/services/${service.slug}`}
                key={service._id}
                component={Anchor}
              >
                <Text size="large">{service.name}</Text>
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
