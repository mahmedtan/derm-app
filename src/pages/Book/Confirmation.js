import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button, Card, Heading, Paragraph } from "grommet";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Layout from "../../components/Utils/Layout";
import Spinner from "../../components/Utils/Spinner";
import { submitForm } from "../../services/forms";
import Loading from "../Extras/Loading";

const Confirmation = () => {
  const [submitted, setSubmitted] = useState(false);
  const { user } = useAuth0();
  const dispatch = useDispatch();
  const { formValues, images, procedures, consultations, date } = useSelector(
    ({ formValues, images, procedures, consultations, date }) => ({
      formValues,
      images,
      procedures,
      consultations,
      date,
    })
  );
  useEffect(() => {
    if (!submitted) {
      if (formValues && images && procedures && consultations && date && user) {
        submitForm(
          formValues,
          images,
          procedures,
          consultations,
          date,
          user
        ).then((res) => {
          dispatch({ type: "RESET_FORM" });
          dispatch({ type: "RESET_INDEX" });
          dispatch({ type: "RESET_IMAGES" });
          dispatch({ type: "RESET_DATE" });
          setSubmitted(true);
        });
      }
    }
  }, [formValues, images, procedures, consultations, date, user]);

  if (!submitted)
    return (
      <Layout>
        <Box align="center" justify="center" height={{ min: "100vh" }}>
          <Heading textAlign="center">Processing your application</Heading>
          <Box height="medium">
            <Spinner />
          </Box>
        </Box>
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
              Dear {formValues.firstName} {formValues.lastName},
            </Heading>
            <Paragraph size="large">
              Your appointment has been booked for {new Date(date).toString()}
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
