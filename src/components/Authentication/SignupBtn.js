import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "grommet";
import React from "react";

const SignupBtn = ({ size }) => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      label="Signup"
      size={size}
      onClick={() =>
        loginWithRedirect({
          screen_hint: "signup",
        })
      }
      style={{ borderRadius: 25, boxShadow: "1px 1px  15px -9px black " }}
    />
  );
};

export default SignupBtn;
