import { useAuth0 } from "@auth0/auth0-react";
import { Box, Card, ResponsiveContext } from "grommet";
import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getPatientDetails } from "../../../services/patients";
import PatientNew from "./PatientNew";
import PatientOld from "./PatientOld";

const PatientDetails = ({ setFullName }) => {
  const uiTheme = useSelector(({ uiTheme }) => uiTheme);
  const [details, setDetails] = useState(null);
  const size = useContext(ResponsiveContext);
  const [change, setChange] = useState(false);
  const {
    user: { sub },
  } = useAuth0();

  useEffect(() => {
    getPatientDetails(sub).then((details) => {
      !details.length ? setDetails({}) : setDetails(details[0]);
    });
  }, [change, sub]);

  useEffect(() => {
    details && details.fullName && setFullName(details.fullName);
  }, [details, setFullName]);
  if (!details) return null;

  return (
    <Box align="center" pad={{ horizontal: "large" }}>
      <Card
        pad="large"
        width={size === "small" ? "large" : "none"}
        animation="zoomOut"
        background={
          uiTheme === "light"
            ? {
                color: "brand-secondary",
                opacity: "medium",
              }
            : "background-front"
        }
        elevation="large"
      >
        {Object.keys(details).length === 0 && details.constructor === Object ? (
          <PatientNew
            sub={sub}
            setChange={() => {
              setChange(!change);
            }}
          />
        ) : (
          <PatientOld
            sub={sub}
            details={details}
            setChange={() => {
              setChange(!change);
            }}
          />
        )}
      </Card>
    </Box>
  );
};

export default PatientDetails;
