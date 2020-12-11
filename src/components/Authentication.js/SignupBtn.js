import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "grommet";
import React from "react";

const SignupBtn = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      label="Signup"
      primary
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
