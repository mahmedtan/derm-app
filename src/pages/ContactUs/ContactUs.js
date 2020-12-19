import { Box, Heading } from "grommet";
import React, { useEffect, useState } from "react";
import BlockContentMain from "../../components/Utils/BlockContentMain";
import { getContactUs } from "../../services/extras";
import Loading from "../Extras/Loading";

const ContactUs = () => {
  const [contactUs, setContactUs] = useState(null);

  useEffect(() => {
    getContactUs().then((res) => {
      setContactUs(res);
    });
  }, []);
  if (!contactUs) return <Loading />;
  return (
    <Box height={{ min: "90vh" }} pad="large" align="center">
      <Heading>{contactUs.title}</Heading>
      <Box width="large">
        <BlockContentMain body={contactUs.body} />
      </Box>
    </Box>
  );
};

export default ContactUs;
