import { Box, Heading, Image } from "grommet";
import React from "react";
import Spinner from "../../components/Utils/Spinner";
import BlockContentMain from "../../components/Utils/BlockContentMain";

const AboutUs = ({ aboutUs }) => {
  if (!aboutUs) return <Spinner />;
  return (
    <Box align="center" gap="large" animation="fadeIn" id="aboutusjs">
      <style jsx>
        {`
          p {
            text-align: start;
          }
        `}
      </style>
      <Box
        overflow="hidden"
        width="small"
        height="small"
        style={{ borderRadius: 100 }}
        elevation="medium"
      >
        <Image src={aboutUs.avatar} fit="cover" />
      </Box>

      <Box align="center" gap="small">
        <Heading margin="none" level="2">
          {aboutUs.title}
        </Heading>

        <BlockContentMain body={aboutUs.body} />
      </Box>
    </Box>
  );
};

export default AboutUs;
