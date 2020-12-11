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
      background="#edddd7"
      justify="evenly"
      align="center"
      direction="row-responsive"
    >
      <Box width="large" align="center">
        <Image src={sapiens} fit="cover" />
      </Box>
      <Box width="medium" align="start" pad="small">
        <Heading color="#0f1f25">
          Get a free consultation on your first visit
        </Heading>
        <Box gap="small" direction="row" align="center" justify="center">
          <Link to="/book-now">
            <Button
              label="Book now"
              primary
              color="#0f1f25"
              size="large"
              style={{ color: "#edddd7" }}
            />
          </Link>

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
