import { Box, Paragraph, Text } from "grommet";
import React, { useState } from "react";
import EditProfile from "./EditProfile";

const PatientNew = ({ sub, setChange }) => {
  const [message, setMessage] = useState(null);
  return (
    <Box align="center" width="medium">
      <Paragraph>You have no previous Information stored </Paragraph>
      <Box width="medium">
        <EditProfile
          setChange={setChange}
          sub={sub}
          setMessage={(message) => {
            setMessage(message);
          }}
        />
      </Box>
    </Box>
  );
};

export default PatientNew;
