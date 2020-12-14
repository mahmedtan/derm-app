import { Box, Heading, Card, Paragraph, Button } from "grommet";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
        <Heading>Confirmation</Heading>
        <Card align="center">
          <Box pad="medium">
            <Heading level="3" margin="none">
              Dear {fullName},
            </Heading>
            <Paragraph size="large">
              Your appointment has been booked for {submittedDate}
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