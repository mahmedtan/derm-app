import Axios from "axios";
import { Box, Heading } from "grommet";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { removeForm } from "../../../services/forms";
import AppointmentCard from "./AppointmentCard";

const Appointments = ({ forms, cancel }) => {
  const history = useHistory();

  const deleteForm = (id, emailAddress, date, fullName) => {
    removeForm(id).then((res) => {
      Axios.post("/api/cancellation", {
        emailAddress,
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
        fullName,
      }).then((res) => {
        window.localStorage.setItem("cancel", true);
        history.push("/profile");
      });
    });
  };

  const deleteAndRescheduleForm = (id, emailAddress, date, fullName) => {
    removeForm(id).then((res) => {
      Axios.post("/api/cancellation", {
        emailAddress,
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
        fullName,
      }).then((res) => {
        // history.createHref("/book-now");
        window.scrollTo(0, 0);
        history.push("/book-now");
      });
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
