import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Button } from "grommet";

const LogoutBtn = ({ size }) => {
  const { logout } = useAuth0();
  return (
    <Button
      label="Logout"
      primary
      size={size}
      onClick={() => logout({ returnTo: window.location.origin })}
    />
  );
};

export default LogoutBtn;
