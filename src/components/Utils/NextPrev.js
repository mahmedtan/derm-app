import React from "react";
import { Box, Heading, Button, Text } from "grommet";
const NextPrev = ({ next, prev }) => {
  return (
    <Box direction="row-responsive" align="center" justify="between">
      {prev && (
        <Button href={`/services/${prev.slug}`}>
          <Box>
            <Heading level="3" margin="none" color="brand" textAlign="start">
              {prev.name}
            </Heading>
            <Text weight="bold" margin="xsmall" textAlign="start">
              Previous
            </Text>
          </Box>
        </Button>
      )}
      {next && (
        <Button href={`/services/${next.slug}`}>
          <Box>
            <Heading level="3" margin="none" color="brand" textAlign="end">
              {next.name}
            </Heading>
            <Text weight="bold" margin="xsmall" textAlign="end">
              Next
            </Text>
          </Box>
        </Button>
      )}
    </Box>
  );
};

export default NextPrev;
