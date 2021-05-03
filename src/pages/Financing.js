import { Box, Heading, Button, Main, Text, Image, Paragraph } from "grommet";
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
  console.log(financing);
  return (
    <Main height={{ min: "90vh" }} align="center" pad={{ top: "large" }}>
      <Box
        align="center"
        width="large"
        fill
        pad={{ horizontal: "large", vertical: "medium" }}
        background={{ color: "background-contrast" }}
        gap="small"
        border="horizontal"
      >
        <Heading margin="none" level="2">
          {financing.title}
        </Heading>
        <Text>{financing.description}</Text>
      </Box>
      <Box width="large" pad="large" align="center" gap="small">
        <Image src={financing.avatar} />

        <Box style={{ textAlign: "center" }}>
          <BlockContentMain body={financing.body} />
        </Box>

        <Box direction="row" gap="small" width="medium">
          <Box basis="1/2">
            <Button
              href="https://www.carecredit.com/apply/"
              primary
              label="Apply Now"
              target="_blank"
              size="large"
            />
          </Box>
          <Box basis="1/2">
            <Button
              href="https://www.carecredit.com/apply/"
              secondary
              label="Pay now"
              target="_blank"
              size="large"
            />
          </Box>
        </Box>
      </Box>
    </Main>
  );
};

export default Finance;
