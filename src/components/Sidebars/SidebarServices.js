import React from "react";
import SidebarAccordian from "./SidebarAccordian";
import { Box, Button } from "grommet";
import { LinkNext } from "grommet-icons";
import { Link } from "react-router-dom";

const SidebarServices = ({ serviceTypes }) => {
  return (
    <Box
      width="medium"
      background="background-contrast"
      align="center"
      elevation="small"
      justify="around"
      height={{ min: "90%" }}
    >
      <SidebarAccordian serviceTypes={serviceTypes} />

      <Box align="center" gap="small" margin="small">
        <Link to="/book-now">
          <Button
            label="Book Now"
            icon={<LinkNext />}
            reverse
            primary
            size="medium"
            style={{ borderRadius: "25px" }}
          />
        </Link>

        <Button
          label=" Call Now "
          icon={<LinkNext />}
          reverse
          secondary
          size="medium"
          href="tel:214-625-2777"
          style={{ borderRadius: "25px" }}
        />
      </Box>
    </Box>
  );
};

export default SidebarServices;
