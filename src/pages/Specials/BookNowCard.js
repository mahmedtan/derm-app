import { Box, Button, Heading } from "grommet";
import React from "react";

const BookNowCard = () => {
  return (
    <Box
      fill="horizontal"
      direction="row-responsive"
      justify="center"
      background="brand-secondary"
      gap="large"
      pad="medium"
    >
      <Heading level="3" margin="none" alignSelf="center">
        Ready to schedule your visit?
      </Heading>
      <Box direction="row" align="center" gap="small" alignSelf="center">
        <Button
          label="Book Now"
          primary
          size="large"
          color="dark-1"
          style={{ color: "white" }}
          href="/book-now"
        />

        <Button
          label="Call Now"
          secondary
          size="large"
          color="dark-1"
          style={{ color: "black" }}
          href="tel:214-625-2777"
        />
      </Box>
    </Box>
  );
};

export default BookNowCard;
