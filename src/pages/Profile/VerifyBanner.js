import React from "react";
import { Box, Text } from "grommet";
import { StatusWarning } from "grommet-icons";
const VerifyBanner = ({ user }) => {
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
        We've sent an confirmation email to {user.email}. Please check your
        inbox to verify your account
      </Text>
    </Box>
  );
};

export default VerifyBanner;
