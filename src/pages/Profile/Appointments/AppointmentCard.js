import { Card, Box, Text, Button } from "grommet";
import { FormDown, FormUp } from "grommet-icons";
import { useState } from "react";
import Appointment from "./Appointment";

const AppointmentCard = ({ form, deleteForm, deleteAndReschedule }) => {
  const [open, setOpen] = useState(false);
  return (
    <Card
      align="center"
      margin={{ horizontal: "large", bottom: "large" }}
      gap="large"
      pad="medium"
    >
      {open ? (
        <Appointment
          form={form}
          deleteForm={deleteForm}
          deleteAndReschedule={deleteAndReschedule}
        />
      ) : (
        <Box align="center" animation="fadeIn" width="large">
          <Text
            size="xlarge"
            weight="normal"
            margin="medium"
            alignSelf="center"
          >
            Personal Information
          </Text>
          <Box direction="row-responsive" justify="around" gap="xlarge">
            <Box gap="large">
              <Box>
                <Text weight="bold" size="large">
                  First Name
                </Text>
                {form.firstName}
              </Box>

              <Box>
                <Text weight="bold" size="large">
                  Booked For
                </Text>
                {new Date(form.bookedFor).toLocaleString()}
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
                  Submitted at
                </Text>
                {new Date(form.submitted).toLocaleString()}
              </Box>
            </Box>
          </Box>
        </Box>
      )}
      <Button
        alignSelf="center"
        onClick={() => {
          setOpen(!open);
        }}
        label={open ? "Collapse" : "Learn More"}
        icon={open ? <FormUp /> : <FormDown />}
      />
    </Card>
  );
};

export default AppointmentCard;
