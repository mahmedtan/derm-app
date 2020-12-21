import { Box, Heading, ResponsiveContext } from "grommet";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Column from "./Column";

const ServicesMain = () => {
  const [serviceTypes] = useSelector(({ serviceTypes }) => [serviceTypes]);

  const size = useContext(ResponsiveContext);

  if (!serviceTypes) return null;

  console.log(serviceTypes);
  const divider = serviceTypes.length / 3;

  return (
    <Box pad="large" align="center" gap="xlarge">
      <Heading margin="none">Services</Heading>

      <Box
        gap={size === "small" ? "xlarge" : "large"}
        direction="row-responsive"
      >
        <Column services={serviceTypes.slice(0, divider)} />
        <Column services={serviceTypes.slice(divider, divider * 2)} />
        <Column services={serviceTypes.slice(divider * 2)} />
      </Box>
    </Box>
  );
};

export default ServicesMain;
