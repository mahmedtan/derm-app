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
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import BlockContentMain from "../components/Utils/BlockContentMain";
import { getFinancing } from "../services/extras";
import Loading from "./Extras/Loading";

const Finance = () => {
  const [financing, setFinancing] = useState(null);
  const size = useContext(ResponsiveContext);
  const uiTheme = useSelector(({ uiTheme }) => uiTheme);

  useEffect(() => {
    getFinancing().then((res) => setFinancing(res));
  }, []);
  if (!financing) return <Loading />;
  return (
    <>
      <Helmet>
        <title>Financing</title>
        {financing.metaTags &&
          financing.metaTags.map(({ _key, _type, ...tag }) => (
            <meta key={_key} {...tag} />
          ))}
      </Helmet>
      <Main
        height={{ min: "90vh" }}
        align="center"
        pad={{ top: "large" }}
        animation={{ type: "fadeIn", duration: "1500" }}
      >
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
                target="_blank"
                method="post"
                action="https://Simplecheckout.authorize.net/payment/CatalogPayment.aspx"
              >
                <input
                  type="hidden"
                  name="LinkId"
                  value="8804e2eb-087b-4bd0-b240-2f9a99475849"
                />

                <Button
                  type="submit"
                  secondary
                  style={{ color: uiTheme === "light" ? "#694F5D" : "#B9A2AE" }}
                  label="Pay Now"
                  size="large"
                  fill
                />
              </form>
            </Box>
          </Box>
        </Box>
      </Main>
    </>
  );
};

export default Finance;
