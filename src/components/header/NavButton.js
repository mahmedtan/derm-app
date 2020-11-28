import React from "react";
import { Button } from "grommet";
import { Link } from "react-router-dom";

const NavButton = ({ to, label }) => {
  return (
    <Link to={to}>
      <Button
        data-tip
        data-for={label}
        hoverIndicator={true}
        focusIndicator={false}
        label={label}
      ></Button>
    </Link>
  );
};

export default NavButton;
