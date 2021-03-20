import React, { useContext, useEffect, useState } from "react";
import { Box, Text, Anchor, ResponsiveContext } from "grommet";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import VisibilitySensor from "react-visibility-sensor";

const Item = ({ servType }) => {
  const [shown, setShown] = useState(false);
  const size = useContext(ResponsiveContext);
  const uiTheme = useSelector(({ uiTheme }) => uiTheme);
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    size === "small" && setShown(visibility);
  }, [visibility]);

  return (
    <VisibilitySensor onChange={(isVisible) => setVisibility(isVisible)}>
      <Box
        width="20rem"
        height={size === "small" ? "18rem" : "20rem"}
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
          <Box
            gap="medium"
            animation={{ type: "fadeIn", size: "xlarge", duration: "2000" }}
            overflow="hidden"
            align="center"
          >
            {servType.services
              .sort((a, b) => a.orderAccordian - b.orderAccordian)
              .map((service) => (
                <Link
                  to={`/services/${service.slug}`}
                  key={service._id}
                  component={Anchor}
                  style={{ textDecoration: "none" }}
                >
                  <Text size="large">{service.name}</Text>
                </Link>
              ))}
          </Box>
        ) : (
          <Box animation="zoomOut">
            <Text
              size="xxlarge"
              color={uiTheme === "light" ? "text" : "dark-1"}
            >
              {" "}
              {servType.name}
            </Text>
          </Box>
        )}
      </Box>
    </VisibilitySensor>
  );
};

export default Item;
