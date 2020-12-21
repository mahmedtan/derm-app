import { Box, Form, FormField } from "grommet";
import React, { useEffect, useState } from "react";
import { getAboutUs } from "../../services/extras";
import AboutUsPart from "./AboutUsPart";
import CommentForm from "./CommentForm";

const AboutUs = () => {
  const [aboutUs, setAboutUs] = useState(null);
  useEffect(() => {}, [getAboutUs().then((res) => setAboutUs(res))]);

  return (
    <Box fill>
      <Box
        direction="row-responsive"
        gap="xlarge"
        justify="center"
        pad="large"
        align="center"
      >
        <Box width="large" pad={{ horizontal: "large" }} align="center">
          <AboutUsPart aboutUs={aboutUs} />

          <Box width="medium" align="center">
            <CommentForm />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;
