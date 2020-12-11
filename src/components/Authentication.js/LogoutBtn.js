import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Button } from "grommet";

const LogoutBtn = () => {
  const { logout } = useAuth0();
  return (
    <Button
      label="Logout"
      primary
      style={{ borderRadius: 25 }}
      onClick={() => logout({ returnTo: window.location.origin })}
    />
  );
};

export default LogoutBtn;
