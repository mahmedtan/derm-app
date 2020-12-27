import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "grommet";
import React from "react";
import LoginBtn from "./LoginBtn";
import { Link } from "react-router-dom";
import { User } from "grommet-icons";

const AutheticationSnackbar = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <Link to="/profile">
      <Button icon={<User />} />
    </Link>
  ) : (
    <LoginBtn primary />
  );
};

export default AutheticationSnackbar;
