import { Box, Button, Heading, Main } from "grommet";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <Main>
        <Box
          direction="column"
          justify="center"
          align="center"
          alignContent="center"
          margin="large"
          pad="xlarge"
        >
          <Heading level={2}>Page Not Found</Heading>
          <Link to="/">
            <Button primary size="medium" pad="small" label="Go back to home" />
          </Link>
        </Box>
      </Main>
    </div>
  );
};

export default NotFound;
