import { Box, ResponsiveContext, Text } from "grommet";
import React, { useState } from "react";
import DetailsField from "./DetailsField";
import { useContext } from "react";
import EditProfile from "./EditProfile";

const PatientOld = ({ details, sub, setChange }) => {
  const size = useContext(ResponsiveContext);
  const [message, setMessage] = useState(null);

  const { emailAddress, phoneNumber, fullName, patientId } = details;

  return (
    <Box gap="large">
      <Text
        size="xlarge"
        style={{ fontWeight: "600" }}
        margin={{ horizontal: "medium" }}
        alignSelf={size === "small" ? "start" : "center"}
      >
        Profile Details
      </Text>

      <Box gap="medium" margin={{ left: size === "small" ? "large" : "none" }}>
        <DetailsField fieldName="Full Name" fieldValue={fullName} />
        <DetailsField fieldName="Phone Number" fieldValue={phoneNumber} />
        <DetailsField fieldName="Email Address" fieldValue={emailAddress} />
        <DetailsField fieldName="Patient ID" fieldValue={patientId} />
      </Box>

      <EditProfile
        setChange={setChange}
        {...details}
        sub={sub}
        setMessage={(message) => setMessage(message)}
      />
      {message && (
        <Text size="large" weight="bold" textAlign="center">
          {message}
        </Text>
      )}
    </Box>
  );
};

export default PatientOld;
