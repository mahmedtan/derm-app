import { Box, Heading, Button } from "grommet";
import React, { useEffect, useState } from "react";
import BlockContentMain from "../components/Utils/BlockContentMain";
import { getFinancing } from "../services/extras";
import Loading from "./Extras/Loading";

const Finance = () => {
  const [financing, setFinancing] = useState(null);

  useEffect(() => {
    getFinancing().then((res) => setFinancing(res));
  }, []);
  if (!financing) return <Loading />;
  return (
    <Box height={{ min: "90vh" }} align="center" pad={{ top: "large" }}>
      <Box
        align="center"
        width="large"
        fill
        pad={{ horizontal: "large", vertical: "small" }}
        background={{ color: "#DCC1BC", opacity: "strong" }}
        border="horizontal"
      >
        <Heading>{financing.title}</Heading>
      </Box>
      <Box width="large" pad="large" align="center">
        <BlockContentMain body={financing.body} />
        <Button
          href="https://google.com"
          primary
          label="Apply Now"
          target="_blank"
          size="large"
        />
      </Box>
    </Box>
  );
};

export default Finance;
