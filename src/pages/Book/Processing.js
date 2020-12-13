import { useAuth0 } from "@auth0/auth0-react";
import { Box, Heading, Paragraph, Text } from "grommet";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Layout from "../../components/Utils/Layout";
import Spinner from "../../components/Utils/Spinner";
import { submitForm } from "../../services/forms";

const Processing = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const { user } = useAuth0();

  const dispatch = useDispatch();
  const history = useHistory();

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
        console.log(
          "Processing",
          formValues,
          images,
          procedures,
          consultations,
          date,
          user
        );
        submitForm(formValues, images, procedures, consultations, date, user)
          .then((res) => {
            console.log(res);
            setSubmitted(true);
          })
          .catch((err) => {
            console.log(err);

            dispatch({ type: "RESET_FORM" });
            dispatch({ type: "RESET_INDEX" });
            dispatch({ type: "RESET_IMAGES" });
            dispatch({ type: "RESET_DATE" });
            setError("Sorry for inconvenience");
          });
      }
      if (formValues.emailAddress === "")
        setError("Looks like you're on the wrong page");
    }
  }, [
    formValues,
    images,
    procedures,
    consultations,
    date,
    user,
    dispatch,
    submitted,
  ]);
  useEffect(() => {
    if (submitted) {
      window.sessionStorage.setItem(
        "fullName",
        formValues.firstName + " " + formValues.lastName
      );
      window.sessionStorage.setItem(
        "submittedDate",
        new Date(date).toLocaleString()
      );

      dispatch({ type: "RESET_FORM" });
      dispatch({ type: "RESET_INDEX" });
      dispatch({ type: "RESET_IMAGES" });
      dispatch({ type: "RESET_DATE" });

      history.push("/confirmation");
    }
  }, [submitted, dispatch]);

  if (error)
    return (
      <Layout>
        <Box align="center" justify="center" height={{ min: "100vh" }}>
          <Heading textAlign="center">Error</Heading>
          <Box height="medium">
            <Text>{error}</Text>
          </Box>
        </Box>
      </Layout>
    );
  if (!submitted)
    return (
      <Box align="center" justify="center" height={{ min: "100vh" }}>
        <Heading textAlign="center">Processing your application</Heading>
        <Box height="medium">
          <Spinner />
        </Box>
        <Paragraph>
          This might take a minute or two depending on the number of images
          you've uploaded. Meanwhile, Please do not refresh or close this page.
        </Paragraph>
      </Box>
    );
  return "Yes";
};

export default Processing;
