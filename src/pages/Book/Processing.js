import { useAuth0 } from "@auth0/auth0-react";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Layout from "../../components/Utils/Layout";
import { submitForm } from "../../services/forms";
import NotFound from "../Extras/404";
import Loading from "../Extras/Loading";

const Processing = () => {
  const [submitted, setSubmitted] = useState(false);

  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const history = useHistory();

  const { formValues, procedures, consultations, date } = useSelector(
    ({ formValues, procedures, consultations, date }) => ({
      formValues,
      procedures,
      consultations,
      date,
    })
  );
  const { user } = useAuth0();

  useEffect(() => {
    if (!submitted) {
      if (formValues && procedures && consultations && date && user) {
        const images =
          window.sessionStorage.getItem("images") &&
          JSON.parse(window.sessionStorage.getItem("images"));

        submitForm(formValues, images, procedures, consultations, date, user)
          .then((response) => {
            console.log("Form Submitted", response);

            Axios.post("/api/mail", {
              formValues,
              date:
                new Date(date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }) +
                " at " +
                new Date(date).toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                }),
              procedures,
              consultations,
            }).then((res) => {
              console.log("Mail sent", res);

              setSubmitted(true);
            });
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
  }, [formValues, procedures, consultations, date, dispatch, submitted, user]);
  useEffect(() => {
    if (submitted) {
      window.sessionStorage.clear();
      window.sessionStorage.setItem(
        "fullName",
        formValues.firstName + " " + formValues.lastName
      );
      window.sessionStorage.setItem("submittedDate", date);

      dispatch({ type: "RESET_FORM" });
      dispatch({ type: "RESET_INDEX" });
      dispatch({ type: "RESET_IMAGES" });
      dispatch({ type: "RESET_DATE" });

      history.push("/confirmation");
    }
  }, [
    submitted,
    dispatch,
    formValues.firstName,
    formValues.lastName,
    date,
    history,
  ]);

  if (error)
    return (
      <Layout>
        <NotFound />
      </Layout>
    );
  if (!submitted) return <Loading />;
  return "Yes";
};

export default Processing;
