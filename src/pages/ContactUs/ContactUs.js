import { Box, Button, Card, Heading, List, Text } from "grommet";
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
      <Card width="large" elevation="small" pad="large" gap="small">
        <Heading
          style={{ fontFamily: "Jost" }}
          textAlign="center"
          margin="none"
          level="3"
        >
          Chic Derm & Aesthetics
        </Heading>
        <Box
          style={{
            fontSize: "1.2rem",
            textAlignLast: "center",
            textAlign: "end",
          }}
        >
          <BlockContentMain body={contactUs.body} />
        </Box>
        <Box
          background={
            uiTheme === "light"
              ? { color: "brand-secondary", opacity: "medium" }
              : "brand-secondary"
          }
          round="small"
          elevation="small"
          pad="small"
        >
          <Text
            textAlign="center"
            size="medium"
            style={{
              fontFamily: "Jost",
            }}
          >
            {" "}
            {contactUs.description}
          </Text>
        </Box>
      </Card>
      <Box direction="row-responsive" gap="large" width="large">
        <Card
          elevation="small"
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
          <Text size="xxlarge">Office Hours</Text>

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
          elevation="small"
          pad="large"
          gap="medium"
          align="center"
          background={
            uiTheme === "light"
              ? { color: "brand-secondary", opacity: "medium" }
              : "background-front"
          }
        >
          <Text size="xxlarge">Contact Us</Text>
          <Box direction="row" gap="small">
            <Button
              href="mailto:contact@mydermpa.com"
              label="Email"
              secondary
              color="brand-secondary"
            />
            <Button
              label="Call"
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
