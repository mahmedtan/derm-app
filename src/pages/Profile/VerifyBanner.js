import React from "react";
import { Box, Text } from "grommet";
import { StatusWarning } from "grommet-icons";
const VerifyBanner = ({ user }) => {
  return (
    <Box
      width="large"
      background="status-warning"
      direction="row"
      gap="large"
      round="medium"
      pad="medium"
    >
      <StatusWarning size="large" />
      <Text size="large">
        We've sent an confirmation email to {user.email}. Please check your
        inbox to verify your account
      </Text>
    </Box>
  );
};

export default VerifyBanner;
