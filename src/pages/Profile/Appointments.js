import { Box, Card, Heading, Text } from "grommet";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { removeForm } from "../../services/forms";
import Appointment from "./Appointment";
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
    <Box pad="large" align="center" gap="large">
      <Heading level="3" textAlign="center" margin="none">
        Appointments
      </Heading>
      {forms.length
        ? forms.map((form) => (
            <AppointmentCard
              key={form._id}
              form={form}
              deleteForm={deleteForm}
              deleteAndReschedule={deleteAndRescheduleForm}
            />
          ))
        : "You have no appointments scheduled"}
    </Box>
  );
};

export default Appointments;
