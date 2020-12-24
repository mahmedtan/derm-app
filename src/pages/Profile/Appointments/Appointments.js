import Axios from "axios";
import { Box, Heading } from "grommet";
import React from "react";
import { useHistory } from "react-router-dom";
import { removeForm } from "../../../services/forms";
import AppointmentCard from "./AppointmentCard";

const Appointments = ({ forms }) => {
  const history = useHistory();

  const deleteForm = (id, emailAddress, date, fullName) => {
    removeForm(id).then((res) => {
      Axios.post("/api/cancellation", {
        emailAddress,
        date,
        fullName,
      }).then((res) => history.push("/profile"));
    });
  };

  const deleteAndRescheduleForm = (id, emailAddress, date, fullName) => {
    removeForm(id).then((res) => {
      Axios.post("/api/cancellation", { emailAddress, date, fullName }).then(
        (res) => {
          history.push("/book-now");
        }
      );
    });
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
