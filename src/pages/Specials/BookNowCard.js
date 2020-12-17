import { Box, Button, Heading, Text } from "grommet";
import React from "react";
import { Link } from "react-router-dom";

const BookNowCard = () => {
  return (
    <Box
      fill="horizontal"
      direction="row-responsive"
      justify="center"
      background="background"
      background="#963D5A"
      border="top"
      gap="large"
      pad="medium"
    >
      <Heading level="3" margin="none" color="light-1">
        Get a free consultation on your first visit
      </Heading>
      <Box direction="row" align="center" gap="small">
        <Button
          label="Book now"
          primary
          size="large"
          color="light-1"
          style={{ color: "#963D5A" }}
          href="/book-now"
        />

        <Button
          label="Call now"
          secondary
          size="large"
          color="light-1"
          style={{ color: "white" }}
          href="tel:214-625-2777"
        />
      </Box>
    </Box>
  );
};

export default BookNowCard;
