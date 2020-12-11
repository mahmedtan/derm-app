import { Card, Box, Text, Image, Button } from "grommet";
import React, { useState } from "react";
import Consultations from "./Consult";

const Appointment = ({ form, deleteForm }) => {
  const [open, setOpen] = useState(false);
  return (
    <Card width="large" pad="medium" align="center" gap="large">
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

      <Text size="xlarge">Images</Text>
      <Box gap="large" direction="row-responsive">
        {form.images &&
          form.images.map((url) => (
            <Box key={url} width="small" border round overflow="hidden">
              <Image src={url} />
            </Box>
          ))}
      </Box>
      <Button primary disabled={open} onClick={() => setOpen(true)}>
        Cancel Appointment
      </Button>
      {open && (
        <Box gap="small">
          <Text>Are you about the cancelation of the appointment!!</Text>
          <Box direction="row" gap="medium" justify="center">
            <Button label="Cancel" onClick={() => setOpen(false)} primary />
            <Button
              label="Ok"
              primary
              color="status-critical"
              onClick={() => deleteForm(form._id)}
            />
          </Box>
        </Box>
      )}
    </Card>
  );
};

export default Appointment;
