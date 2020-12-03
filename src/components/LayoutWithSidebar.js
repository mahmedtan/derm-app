import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Box } from "grommet";
import SidebarAccordian from "./SidebarAccordian";
import { Switch, Route, Redirect } from "react-router-dom";
import Service from "../pages/Service";

const LayoutWithSidebar = ({ children }) => {
  return (
    <Box>
      <Header />
      <Box direction="row-responsive" justify="end">
        <Box height="100vh" flex="grow" align="center">
          <Switch>
            <Route path="/services/:id">
              <Service />
            </Route>
            <Route path="/services">
              <Redirect to="/services/acne" />
            </Route>
          </Switch>
          <Footer />
        </Box>
        <Box
          width="medium"
          background="background-contrast"
          height={{ min: "100%" }}
        >
          <SidebarAccordian />
        </Box>
      </Box>
    </Box>
  );
};

export default LayoutWithSidebar;
