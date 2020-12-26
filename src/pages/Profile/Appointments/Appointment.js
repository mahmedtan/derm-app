import {
  Card,
  Box,
  Text,
  Image,
  Button,
  Paragraph,
  ResponsiveContext,
  CheckBox,
} from "grommet";
import React, { useContext, useState } from "react";
import Consultations from "./Consult";

const Appointment = ({ form, deleteForm, deleteAndReschedule }) => {
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const size = useContext(ResponsiveContext);
  const alignTitle = size === "small" ? "start" : "end";
  const [checkBoxCancel, setCheckBoxCancel] = useState(false);

  return (
    <Box
      align="center"
      gap="medium"
      margin="medium"
      animation="fadeIn"
      width="large"
    >
      <Text
        size="xlarge"
        weight="normal"
        margin="medium"
        alignSelf="center"
        textAlign="center"
      >
        Booking for{" "}
        {new Date(form.bookedFor).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
        })}
      </Text>

      <Box
        align={size === "small" ? "start" : "center"}
        fill
        pad={{ horizontal: "xlarge" }}
      >
        <Box gap="medium">
          <Box gap="medium" direction="row-responsive" justify="center">
            <Box width="small" align={alignTitle}>
              <Text weight="bold" size="large">
                First Name
              </Text>
              {form.firstName}
            </Box>
            <Box width="small">
              <Text weight="bold" size="large">
                Last Name
              </Text>
              {form.lastName}
            </Box>
          </Box>

          <Box gap="medium" direction="row-responsive" justify="center">
            <Box width="small" align={alignTitle}>
              <Text weight="bold" size="large">
                Email Address
              </Text>
              {form.emailAddress}
            </Box>
            <Box width="small">
              <Text weight="bold" size="large">
                Date & Time
              </Text>
              {new Date(form.bookedFor).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              }) +
                " " +
                new Date(form.bookedFor).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
            </Box>
          </Box>
          <Box gap="medium" direction="row-responsive" justify="center">
            <Box width="small" align={alignTitle}>
              <Text weight="bold" size="large">
                Phone Number
              </Text>
              {form.phoneNumber}
            </Box>
            <Box width="small">
              <Text weight="bold" size="large">
                Appointment ID
              </Text>
              {form.appointmentId}
            </Box>
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
          <Paragraph textAlign="center">{form.remarks}</Paragraph>
        </Box>
      )}

      {form.cancelled ? (
        <Button
          disabled
          label="Cancelled"
          size="large"
          color="status-critical"
          style={{ color: "white" }}
        />
      ) : (
        <Button primary disabled={open} onClick={() => setOpen(true)}>
          Cancel Appointment
        </Button>
      )}
      {open && (
        <Box gap="small">
          <Box direction="row" align="start" margin={{ vertical: "medium" }}>
            <CheckBox
              checked={checkBoxCancel}
              onChange={(e) => setCheckBoxCancel(e.target.checked)}
            />

            <Text alignSelf="center">
              We ask that you give us at least 24 hours notice if you need to
              cancel or reschedule an appointment.
            </Text>
          </Box>

          <Box direction="row" gap="medium" justify="center">
            <Button
              label="Cancel & Reschedule"
              onClick={() => {
                setDisabled(true);
                deleteAndReschedule(
                  form._id,
                  form.emailAddress,
                  form.bookedFor,
                  form.firstName + " " + form.lastName
                );
              }}
              primary
              disabled={!checkBoxCancel || disabled}
            />
            <Button
              label="Just Cancel"
              primary
              color="status-critical"
              onClick={() => {
                setDisabled(true);

                deleteForm(
                  form._id,
                  form.emailAddress,
                  form.bookedFor,
                  form.firstName + " " + form.lastName
                );
              }}
              disabled={!checkBoxCancel || disabled}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Appointment;
