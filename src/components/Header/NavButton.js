import React from "react";
import { Anchor, Text } from "grommet";
import { Link } from "react-router-dom";

const NavButton = ({ to, label }) => {
  return (
    <Link to={to}>
      <Text color="text" style={{ fontWeight: "500" }}>
        {label}
      </Text>
    </Link>
  );
};

export default NavButton;
