import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "grommet";
import React from "react";

const SignupBtn = ({ size }) => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      label="Signup"
      primary
      size={size}
      onClick={() =>
        loginWithRedirect({
          screen_hint: "signup",
        })
      }
      style={{ borderRadius: 25 }}
    />
  );
};

export default SignupBtn;
