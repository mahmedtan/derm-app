import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "grommet";
import React from "react";

const LoginBtn = ({ size }) => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      label="Login"
      secondary
      size={size}
      onClick={() => loginWithRedirect()}
      style={{ borderRadius: 25 }}
    />
  );
};

export default LoginBtn;
