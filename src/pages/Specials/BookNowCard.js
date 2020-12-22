import { Box, Button, Heading, Text } from "grommet";
import React from "react";
import { Link } from "react-router-dom";

const BookNowCard = () => {
  return (
    <Box
      fill="horizontal"
      direction="row-responsive"
      justify="center"
      background="#E5DCE0"
      border="top"
      gap="large"
      pad="medium"
    >
      <Heading level="3" margin="none">
        Get a free consultation on your first visit
      </Heading>
      <Box direction="row" align="center" gap="small">
        <Button
          label="Book now"
          primary
          size="large"
          color="dark-1"
          style={{ color: "white" }}
          href="/book-now"
        />

        <Button
          label="Call now"
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
