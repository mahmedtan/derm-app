import React from "react";
import { Box, Text } from "grommet";
import { StatusWarning } from "grommet-icons";
import { useEffect } from "react";

const CancellationBanner = () => {
  return (
    <Box
      background="background-contrast"
      direction="row-responsive"
      gap="large"
      align="center"
      justify="center"
      round="medium"
      pad="medium"
      margin="large"
    >
      <Box alignSelf="center">
        <StatusWarning size="large" />
      </Box>

      <Text size="large">
        Your appointment has been cancelled and a confirmation email has been
        sent to your email.
      </Text>
    </Box>
  );
};

export default CancellationBanner;
