import React from "react";
import { Box, Button, Heading, Image } from "grommet";
import sapiens from "./sapiens-v2.png";
import { Link } from "react-router-dom";

const Pamphlet = () => {
  return (
    <Box
      height="full"
      width="100vw"
      pad="large"
      id="pamphlet"
      background="brand-tertiary"
      justify="evenly"
      align="center"
      direction="row-responsive"
    >
      <Box width="large" align="center">
        <Image src={sapiens} fit="cover" />
      </Box>
      <Box width="large" align="center" pad="small">
        <Heading color="#0f1f25" textAlign="center">
          Schedule your free Cosmetic Evaluation.
        </Heading>
        <Box gap="small" direction="row" align="center" justify="center">
          <Button
            label="Book now"
            primary
            color="#0f1f25"
            size="large"
            style={{ color: "white" }}
            href="/book-now"
          />

          <Button
            label="Call now"
            secondary
            size="large"
            color="#0f1f25"
            href="tel:214-625-2777"
            style={{ color: "#0f1f25" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Pamphlet;
