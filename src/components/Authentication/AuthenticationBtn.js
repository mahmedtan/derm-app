import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button, ResponsiveContext } from "grommet";
import React, { useContext } from "react";
import SignupBtn from "./SignupBtn";
import LoginBtn from "./LoginBtn";
import LogoutBtn from "./LogoutBtn";
import { Link } from "react-router-dom";
import { User } from "grommet-icons";

const AutheticationBtn = () => {
  const { isAuthenticated } = useAuth0();
  const size = useContext(ResponsiveContext);
  const btnSize = size === "small" ? "large" : "medium";

  return isAuthenticated ? (
    <Box
      direction="row"
      gap="small"
      height={size === "small" ? "60px" : "fill"}
      margin={{ horizontal: "medium" }}
    >
      <Link to="/profile">
        <Box elevation="large" round="large">
          <Button label="Profile" size={btnSize} />
        </Box>
      </Link>
      <Box>
        <LogoutBtn size={btnSize} />
      </Box>
    </Box>
  ) : (
    <Box
      direction="row"
      gap="small"
      margin={{ horizontal: "medium" }}
      align="center"
    >
      <SignupBtn size={btnSize} />
      <LoginBtn size={btnSize} />
    </Box>
  );
};

export default AutheticationBtn;
