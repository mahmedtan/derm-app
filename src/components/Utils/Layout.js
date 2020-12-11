import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Box } from "grommet";

const Layout = ({ children }) => {
  return (
    <Box>
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
