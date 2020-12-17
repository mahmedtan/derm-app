import { Card, Box, Text, Image, Button, Paragraph } from "grommet";
import React, { useState } from "react";
import Consultations from "./Consult";

const Appointment = ({ form, deleteForm, deleteAndReschedule }) => {
  const [open, setOpen] = useState(false);

  return (
    <Box
      align="center"
      gap="medium"
      margin="medium"
      animation="fadeIn"
      width="large"
    >
      <Text size="xlarge" weight="normal" margin="medium" alignSelf="center">
        Personal Information
      </Text>
      <Box
        pad={{ horizontal: "xlarge" }}
        direction="row-responsive"
        justify="between"
        gap="large"
        fill
        align="center"
      >
        <Box gap="large">
          <Box>
            <Text weight="bold" size="large">
              First Name
            </Text>
            {form.firstName}
          </Box>
          <Box>
            <Text weight="bold" size="large">
              Email Address
            </Text>
            {form.emailAddress}
          </Box>
          <Box>
            <Text weight="bold" size="large">
              Booked For
            </Text>
            {new Date(form.bookedFor).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }) +
              " " +
              new Date(form.bookedFor).toLocaleTimeString("en-US", {
                timeStyle: "short",
              })}
          </Box>
        </Box>
        <Box gap="large">
          <Box>
            <Text weight="bold" size="large">
              Last Name
            </Text>
            {form.lastName}
          </Box>
          <Box>
            <Text weight="bold" size="large">
              Phone Number
            </Text>
            {form.phoneNumber}
          </Box>
          <Box>
            <Text weight="bold" size="large">
              Submitted at
            </Text>
            {new Date(form.submitted).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }) +
              " " +
              new Date(form.submitted).toLocaleTimeString("en-US", {
                timeStyle: "short",
              })}
          </Box>
        </Box>
      </Box>
      <Consultations title="Consultations" consultations={form.consultations} />
      <Consultations title="Procedures" consultations={form.procedures} />

      {form.images.length > 0 && (
        <Box gap="medium">
          <Text
            size="xlarge"
            weight="normal"
            margin="medium"
            alignSelf="center"
          >
            Images
          </Text>
          <Box gap="large" direction="row-responsive">
            {form.images &&
              form.images.map((url) => (
                <Box key={url} width="small" border round overflow="hidden">
                  <Image src={url} />
                </Box>
              ))}
          </Box>
        </Box>
      )}
      {form.remarks && (
        <Box>
          <Text
            size="xlarge"
            weight="normal"
            margin="medium"
            alignSelf="center"
          >
            Notes
          </Text>
          <Paragraph>{form.remarks}</Paragraph>
        </Box>
      )}

      {form.cancelled ? (
        <Button secondary disabled label="cancelled" />
      ) : (
        <Button primary disabled={open} onClick={() => setOpen(true)}>
          Cancel Appointment
        </Button>
      )}
      {open && (
        <Box gap="small">
          <Text textAlign="center">
            Are you sure about this!! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Eveniet, culpa.
          </Text>
          <Box direction="row" gap="medium" justify="center">
            <Button
              label="Cancel & Reschedule"
              onClick={() => deleteAndReschedule(form._id)}
              primary
            />
            <Button
              label="Just Cancel"
              primary
              color="status-critical"
              onClick={() => deleteForm(form._id)}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Appointment;
