import { Box, Button, Card, Heading, List, Text } from "grommet";
import { BlockQuote } from "grommet-icons";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BlockContentMain from "../../components/Utils/BlockContentMain";
import { getContactUs } from "../../services/extras";
import Loading from "../Extras/Loading";
import CommentForm from "./CommentForm";

const ContactUs = () => {
  const [contactUs, setContactUs] = useState(null);
  const uiTheme = useSelector(({ uiTheme }) => uiTheme);

  useEffect(() => {
    getContactUs().then((res) => {
      setContactUs(res);
    });
  }, []);

  if (!contactUs) return <Loading />;

  const data = [
    { day: "Monday", timings: "9AM to 7PM" },
    { day: "Tuesday", timings: "9AM to 7PM" },
    { day: "Wednesday", timings: "9AM to 7PM" },
    { day: "Thursday", timings: "9AM to 7PM" },
    { day: "Friday", timings: "9AM to 7PM" },
    { day: "Saturday", timings: "12PM to 6PM" },
  ];
  return (
    <Box pad="large" align="center" gap="large">
      <Card width="large" elevation="large" pad="medium">
        <Box style={{ fontSize: "1.2rem" }}>
          <BlockContentMain body={contactUs.body} />{" "}
        </Box>
        <BlockQuote>{contactUs.description}</BlockQuote>
      </Card>
      <Box direction="row-responsive" gap="large" width="large">
        <Card
          elevation="large"
          basis="1/2"
          align="center"
          pad="large"
          gap="medium"
          justify="between"
          background={
            uiTheme === "light"
              ? {
                  color: "brand-secondary",
                  opacity: "medium",
                }
              : "background-front"
          }
        >
          <Text size="xxlarge">Working Hours</Text>

          <List data={data} primaryKey="day" secondaryKey="timings" />
          <Button
            label="Make a Reservation"
            primary
            fill="horizontal"
            href="/book-now"
            color="brand-secondary"
            style={{ color: "black" }}
          />
        </Card>
        <Card
          basis="1/2"
          elevation="large"
          pad="large"
          gap="medium"
          align="center"
          background={
            uiTheme === "light"
              ? { color: "brand-secondary", opacity: "medium" }
              : "background-front"
          }
        >
          <Text size="xxlarge">Drop us a line</Text>
          <Box direction="row" gap="small">
            <Button
              href="mailto:contact@mydermpa.com"
              label="Email us"
              secondary
              color="brand-secondary"
            />
            <Button
              href="mailto:contact@mydermpa.com"
              label="Call us"
              primary
              color="brand-secondary"
              style={{ color: "black" }}
              href="tel:(469) 466-2727"
            />
          </Box>

          <CommentForm />
        </Card>
      </Box>
    </Box>
  );
};

export default ContactUs;
