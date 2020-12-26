import { Box, Heading, Button, Main, Text } from "grommet";
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
    <Main height={{ min: "90vh" }} align="center" pad={{ top: "large" }}>
      <Box
        align="center"
        width="large"
        fill
        pad={{ horizontal: "large", vertical: "medium" }}
        background={{ color: "#C6CCD2", opacity: "medium" }}
        gap="small"
        border="horizontal"
      >
        <Heading margin="none" style={{ fontFamily: "Dancing Script" }}>
          {financing.title}
        </Heading>
        <Text>Lorem ipsum dolor sit amet.</Text>
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
    </Main>
  );
};

export default Finance;
