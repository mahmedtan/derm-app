import { Box, Heading, Card, Paragraph, Button, Text } from "grommet";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Utils/Layout";
import NotFound from "../Extras/404";

const Confirmation = () => {
  const [fullName, setFullName] = useState(null);
  const [submittedDate, setSubmittedDate] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (
      window.sessionStorage.getItem("fullName") &&
      window.sessionStorage.getItem("submittedDate")
    ) {
      setFullName(window.sessionStorage.getItem("fullName"));
      setSubmittedDate(window.sessionStorage.getItem("submittedDate"));
    } else setError(true);
  }, []);
  if (error)
    return (
      <Layout>
        <NotFound />
      </Layout>
    );

  return (
    <Layout>
      <Box
        align="center"
        justify="start"
        height={{ min: "100vh" }}
        margin="large"
      >
        <Heading>You are all set!</Heading>
        <Card align="center">
          <Box pad="medium" align="center" gap="small">
            <Text size="xlarge" weight="bold">
              Dear {fullName}
            </Text>
            <Paragraph size="large" textAlign="center">
              Your appointment has been booked for <br />
              {new Date(submittedDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }) +
                " at " +
                new Date(submittedDate).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
            </Paragraph>
            <Link to="/profile">
              <Button primary label="Go to profile" />
            </Link>
          </Box>
        </Card>
      </Box>
    </Layout>
  );
};

export default Confirmation;
