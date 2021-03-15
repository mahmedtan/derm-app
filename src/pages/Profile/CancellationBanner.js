import React from "react";
import { Box, Text } from "grommet";

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
      <Text size="large">
        Your appointment has been cancelled and a confirmation email has been
        sent to your email.
      </Text>
    </Box>
  );
};

export default CancellationBanner;
