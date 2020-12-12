import { Card, Box, Text, Button } from "grommet";
import { FormDown, FormUp } from "grommet-icons";
import { useState } from "react";
import Appointment from "./Appointment";

const AppointmentCard = ({ form, deleteForm, deleteAndReschedule }) => {
  const [open, setOpen] = useState(false);
  return (
    <Card width="large" pad="small">
      {open ? (
        <Appointment
          form={form}
          deleteForm={deleteForm}
          deleteAndReschedule={deleteAndReschedule}
        />
      ) : (
        <Box pad="medium" align="center" gap="large">
          <Text size="xlarge">Personal Information</Text>
          <Box fill direction="row-responsive" justify="around" gap="large">
            <Box gap="large" margin={{ horizontal: "large" }}>
              <Box>
                <Text weight="bold">First Name</Text>
                {form.firstName}
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
                <Text weight="bold">Submitted at</Text>
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
