import { useAuth0 } from "@auth0/auth0-react";
import { Box, Card, Heading, ResponsiveContext } from "grommet";
import React, { useContext, useEffect, useState } from "react";
import { getPatientDetails } from "../../../services/patients";
import Loading from "../../Extras/Loading";
import PatientNew from "./PatientNew";
import PatientOld from "./PatientOld";

const PatientDetails = ({ setFullName }) => {
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
  }, [change]);

  useEffect(() => {
    details && details.fullName && setFullName(details.fullName);
  }, [details]);

  return (
    <Box align="center">
      <Heading
        level="3"
        textAlign="center"
        margin={{ bottom: "large", top: "none" }}
        color="text"
      >
        Profile
      </Heading>
      <Card
        pad={{
          vertical: size === "small" ? "medium" : "large",
          horizontal: "large",
        }}
        animation="zoomOut"
      >
        {!details ? (
          <Loading />
        ) : Object.keys(details).length === 0 &&
          details.constructor === Object ? (
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
