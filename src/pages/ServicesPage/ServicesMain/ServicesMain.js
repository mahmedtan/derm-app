import { Box, Heading, ResponsiveContext, Text } from "grommet";
import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import Column from "./Column";
import Loading from "../../Extras/Loading";
import { useEffect } from "react";

const ServicesMain = () => {
  const [serviceTypes] = useSelector(({ serviceTypes }) => [serviceTypes]);
  const dispatch = useDispatch();

  const size = useContext(ResponsiveContext);
  useEffect(() => {
    dispatch({ type: "RESET_FORM" });
    dispatch({ type: "RESET_INDEX" });
    dispatch({ type: "RESET_IMAGES" });
    dispatch({ type: "RESET_DATE" });
  }, []);

  if (!serviceTypes) return <Loading />;

  const divider = serviceTypes.length / 3;

  return (
    <Box pad="large" align="center" gap="xlarge">
      <Box gap="small" align="center">
        <Heading margin="none">Services</Heading>
        <Text>Click on categories below to view services</Text>
      </Box>

      <Box
        gap={size === "small" ? "xlarge" : "medium"}
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
