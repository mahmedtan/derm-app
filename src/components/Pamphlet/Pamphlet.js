import React from "react";
import { Box, Button, Heading, Image, ResponsiveContext, Text } from "grommet";
import sapiens from "./sapiens-v2.png";
import { useContext } from "react";

const Pamphlet = () => {
  const size = useContext(ResponsiveContext);
  return (
    <Box
      height="full"
      width="100vw"
      pad="large"
      id="pamphlet"
      background="brand-tertiary"
      align="center"
    >
      <Box direction="row-responsive" align="center">
        <Box width="large" align="center">
          <Image src={sapiens} fit="cover" />
        </Box>
        <Box width="large" align="center" pad="small">
          <Text
            color="#0f1f25"
            textAlign="center"
            size="2.5rem"
            style={{ fontWeight: "600" }}
            margin="medium"
          >
            Schedule {size !== "small" && "Your"} <br /> Free Cosmetic
            Evaluation!
          </Text>
          <Box gap="small" direction="row" align="center" justify="center">
            <Button
              label="Book Now"
              primary
              color="#0f1f25"
              size="large"
              style={{ color: "white" }}
              href="/book-now"
            />

            <Button
              label="Call Now"
              secondary
              size="large"
              color="#0f1f25"
              href="tel:469-466-2727"
              style={{ color: "#0f1f25" }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Pamphlet;
