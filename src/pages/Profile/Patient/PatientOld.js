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
    <Box gap="large" margin={{ vertical: size === "small" ? "large" : "none" }}>
      <Text size="xlarge" weight="bold" margin="none" alignSelf="center">
        Profile Details
      </Text>
      <Box align="center">
        <Box gap="medium">
          <DetailsField fieldName="Full Name" fieldValue={fullName} />
          <DetailsField fieldName="Phone Number" fieldValue={phoneNumber} />
          <DetailsField fieldName="Email Address" fieldValue={emailAddress} />
          <DetailsField fieldName="Patient ID" fieldValue={patientId} />
        </Box>
      </Box>
      <EditProfile
        setChange={setChange}
        {...details}
        sub={sub}
        setMessage={(message) => setMessage(message)}
      />
      {message && (
        <Text size="large" weight="bold">
          {message}
        </Text>
      )}
    </Box>
  );
};

export default PatientOld;
