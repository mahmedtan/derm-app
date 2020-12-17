import { Box, Heading, Image, Stack } from "grommet";
import React from "react";
import Spinner from "../../components/Utils/Spinner";
import BlockContentMain from "../../components/Utils/BlockContentMain";

const AboutUs = ({ aboutUs }) => {
  if (!aboutUs) return <Spinner />;
  return (
    <Box align="center" gap="medium" animation="fadeIn">
      <Box
        overflow="hidden"
        width="small"
        height="small"
        style={{ borderRadius: 100 }}
        elevation="medium"
      >
        <Image src={aboutUs.avatar} fit="cover" />
      </Box>

      <Heading style={{ fontFamily: "Dancing Script" }}>
        {aboutUs.title}
      </Heading>

      <BlockContentMain body={aboutUs.body} />
    </Box>
  );
};

export default AboutUs;
