import React from "react";
import { Anchor } from "grommet";
import { Link } from "react-router-dom";

const NavButton = ({ to, label }) => {
  return (
    <Link to={to} component={Anchor}>
      {label}
    </Link>
  );
};

export default NavButton;
