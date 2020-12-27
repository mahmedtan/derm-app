import { useAuth0 } from "@auth0/auth0-react";
import { Box, Card, ResponsiveContext } from "grommet";
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
  }, [change, sub]);

  useEffect(() => {
    details && details.fullName && setFullName(details.fullName);
  }, [details, setFullName]);
  if (!details) return <Loading />;

  return (
    <Box align="center" pad={{ horizontal: "large" }}>
      <Card
        pad={{
          vertical: size === "small" ? "medium" : "large",
          horizontal: "large",
        }}
        animation="zoomOut"
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
