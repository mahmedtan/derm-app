import { Card, Box, Text, Image, Button, Paragraph } from "grommet";
import React, { useState } from "react";
import Consultations from "./Consult";

const Appointment = ({ form, deleteForm, deleteAndReschedule }) => {
  const [open, setOpen] = useState(false);

  return (
    <Box pad="medium" align="center" gap="large">
      <Text size="xlarge">Personal Information</Text>
      <Box fill direction="row-responsive" justify="around" gap="large">
        <Box gap="large" margin={{ horizontal: "large" }}>
          <Box>
            <Text weight="bold">First Name</Text>
            {form.firstName}
          </Box>
          <Box>
            <Text weight="bold">Email Address</Text>
            {form.emailAddress}
          </Box>
          <Box>
            <Text weight="bold">Booked For</Text>
            {new Date(form.bookedFor).toLocaleString()}
          </Box>
        </Box>
        <Box gap="large" margin={{ horizontal: "large" }}>
          <Box>
            <Text weight="bold">Last Name</Text>
            {form.lastName}
          </Box>
          <Box>
            <Text weight="bold">Phone Number</Text>
            {form.phoneNumber}
          </Box>
          <Box>
            <Text weight="bold">Submitted at</Text>
            {new Date(form.submitted).toLocaleString()}
          </Box>
        </Box>
      </Box>
      <Consultations title="Consultations" consultations={form.consultations} />
      <Consultations title="Procedures" consultations={form.procedures} />

      {form.images.length > 0 && (
        <Box gap="medium">
          <Text size="xlarge" alignSelf="center">
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
          <Text size="xlarge" alignSelf="center">
            Additional Notes
          </Text>
          <Paragraph>{form.remarks}</Paragraph>
        </Box>
      )}

      <Button primary disabled={open} onClick={() => setOpen(true)}>
        Cancel Appointment
      </Button>
      {open && (
        <Box gap="small" width="medium">
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
