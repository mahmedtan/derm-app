import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button } from "grommet";
import React from "react";
import SignupBtn from "./SignupBtn";
import LoginBtn from "./LoginBtn";
import LogoutBtn from "./LogoutBtn";
import { Link } from "react-router-dom";
import { User } from "grommet-icons";

const AutheticationBtn = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <Box direction="row" gap="xsmall" margin={{ horizontal: "large" }}>
      <Link to="/profile">
        <Button icon={<User />} />
      </Link>
      <LogoutBtn />
    </Box>
  ) : (
    <Box direction="row" gap="xsmall" margin={{ horizontal: "large" }}>
      <SignupBtn />
      <LoginBtn />
    </Box>
  );
};

export default AutheticationBtn;
