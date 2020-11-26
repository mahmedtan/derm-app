import React from "react";
import { Link } from "react-router-dom";

const Linker = (props) => {
  return (
    <Link {...props} style={{ textDecoration: "none" }} color="brand">
      {props.children}
    </Link>
  );
};

export default Linker;
