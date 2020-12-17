import { Box, Form, FormField } from "grommet";
import React, { useEffect, useState } from "react";
import { getAboutUs } from "../../services/extras";
import AboutUs from "./AboutUs";
import CommentForm from "./CommentForm";

const ContactUs = () => {
  const [aboutUs, setAboutUs] = useState(null);
  useEffect(() => {}, [getAboutUs().then((res) => setAboutUs(res))]);

  return (
    <Box fill>
      <Box direction="row-responsive" gap="xlarge" justify="center" pad="large">
        <Box width="large" pad={{ horizontal: "large" }}>
          <AboutUs aboutUs={aboutUs} />
        </Box>
        <Box align="center" margin={{ top: "medium" }}>
          <CommentForm />
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;
