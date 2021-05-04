import {
  Box,
  Heading,
  Button,
  Main,
  Text,
  Image,
  Paragraph,
  ResponsiveContext,
} from "grommet";
import React, { useContext, useEffect, useState } from "react";
import BlockContentMain from "../components/Utils/BlockContentMain";
import { getFinancing } from "../services/extras";
import Loading from "./Extras/Loading";

const Finance = () => {
  const [financing, setFinancing] = useState(null);
  const size = useContext(ResponsiveContext);

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
        <Box margin={{ vertical: "medium" }}>
          {size === "small" ? (
            <iframe
              width="326"
              height="232"
              class="assetIframe"
              style={{ border: 0 }}
              src="//www.carecredit.com/providercenter/getassetcalculator/?size=326x232&color=ffffff"
            ></iframe>
          ) : (
            <iframe
              width="420"
              height="183"
              class="assetIframe"
              style={{ border: 0 }}
              src="//www.carecredit.com/providercenter/getassetcalculator/?size=420x183&color=ffffff"
            ></iframe>
          )}
        </Box>

        <Box direction="row" gap="small" width="medium">
          <Box basis="1/2">
            <Button
              href="https://www.carecredit.com/go/584BWH/bb3poscustacqbtnclk08132020/?dtc=Ds5X&promocode=CLT/"
              primary
              label="Apply Now"
              target="_blank"
              size="large"
            />
          </Box>
          <Box basis="1/2">
            <form
              name="PrePage"
              method="post"
              action="https://Simplecheckout.authorize.net/payment/CatalogPayment.aspx"
            >
              <input
                type="hidden"
                name="LinkId"
                value="8804e2eb-087b-4bd0-b240-2f9a99475849"
              />

              <input
                type="submit"
                value="Pay Now"
                style={{
                  background: "white",
                  borderRadius: "25px",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                }}
              />
            </form>
          </Box>
        </Box>
      </Box>
    </Main>
  );
};

export default Finance;
