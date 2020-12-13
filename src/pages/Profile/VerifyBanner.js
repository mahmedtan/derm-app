import React from "react";
import { Box, Text } from "grommet";
import { StatusWarning } from "grommet-icons";
const VerifyBanner = ({ user }) => {
  return (
    <Box
      background="status-warning"
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
        We've sent an confirmation email to {user.email}. Please check your
        inbox to verify your account
      </Text>
    </Box>
  );
};

export default VerifyBanner;
