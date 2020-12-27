import React, { useState } from "react";
import { Box, Text, Layer, Heading, Stack, Anchor } from "grommet";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Item = ({ servType }) => {
  const [shown, setShown] = useState(false);
  const uiTheme = useSelector(({ uiTheme }) => uiTheme);

  return (
    <Box
      width="20rem"
      height="20rem"
      background={
        uiTheme === "light"
          ? shown
            ? { color: servType.backgroundColor, opacity: "strong" }
            : servType.backgroundColor
          : shown
          ? { color: servType.backgroundColor, opacity: "strong" }
          : { color: servType.backgroundColor, opacity: "70%" }
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
        <Box gap="medium" animation="zoomOut" overflow="hidden" align="center">
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
          <Text size="xxlarge" color={uiTheme === "light" ? "text" : "dark-1"}>
            {" "}
            {servType.name}
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default Item;
