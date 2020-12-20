import { Box, Card, Heading, Text } from "grommet";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { removeForm } from "../../../services/forms";
import AppointmentCard from "./AppointmentCard";

const Appointments = ({ forms }) => {
  const history = useHistory();
  const deleteForm = (id) => {
    removeForm(id).then((res) => history.push("/profile"));
  };
  const deleteAndRescheduleForm = (id) => {
    removeForm(id).then((res) => history.push("/book-now"));
  };

  return (
    <Box align="center" gap="large">
      <Heading level="3" textAlign="center" margin="none">
        Appointments
      </Heading>
      <Box>
        {forms.length
          ? forms.map((form, index) => (
              <AppointmentCard
                first={index === 0}
                key={form._id}
                form={form}
                deleteForm={deleteForm}
                deleteAndReschedule={deleteAndRescheduleForm}
              />
            ))
          : "You have no appointments scheduled"}
      </Box>
    </Box>
  );
};

export default Appointments;
