import { Box, Image } from "grommet";
import React, { useEffect, useState } from "react";
import { getAboutUs } from "../../services/extras";
import AboutUsPart from "./AboutUsPart";
import Loading from "../Extras/Loading";

const AboutUs = () => {
  const [aboutUs, setAboutUs] = useState(null);
  useEffect(() => {
    getAboutUs().then((res) => setAboutUs(res));
  }, []);

  if (!aboutUs) return <Loading />;

  return (
    <Box fill>
      <Box
        direction="row-responsive"
        gap="xlarge"
        justify="center"
        pad="large"
        align="center"
      >
        <Box basis="1/2" align="center">
          <AboutUsPart aboutUs={aboutUs} />
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;
