import React from "react";
import { Anchor, Button, Text } from "grommet";
import { Link } from "react-router-dom";

const NavButton = ({ to, label }) => {
  return (
    <Link to={to} component={Anchor}>
      {label}
    </Link>
  );
};
const Label = (label) => <Text>{label}</Text>;

export default NavButton;
