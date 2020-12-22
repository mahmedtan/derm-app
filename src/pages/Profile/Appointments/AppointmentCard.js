import { Card, Box, Text, Button, ResponsiveContext } from "grommet";
import { FormDown, FormUp } from "grommet-icons";
import { useContext, useState } from "react";
import Appointment from "./Appointment";

const AppointmentCard = ({ form, deleteForm, deleteAndReschedule, first }) => {
  const [open, setOpen] = useState(false);
  const size = useContext(ResponsiveContext);
  return (
    <Card
      align="center"
      margin={{ horizontal: "large", bottom: "large" }}
      gap="medium"
      pad="medium"
    >
      {open ? (
        <Appointment
          form={form}
          deleteForm={deleteForm}
          deleteAndReschedule={deleteAndReschedule}
        />
      ) : (
        <Box
          align={size === "small" ? "start" : "center"}
          animation="fadeIn"
          width="large"
        >
          <Text
            size="xlarge"
            weight="normal"
            margin="medium"
            textAlign="center"
          >
            Booking for{" "}
            {new Date(form.bookedFor).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </Text>
          <Box gap="medium" pad={{ horizontal: "xlarge" }}>
            <Box gap="small" direction="row-responsive" justify="center">
              {first && (
                <Box width="10rem">
                  <Text weight="bold" size="large">
                    First Name
                  </Text>
                  {form.firstName}
                </Box>
              )}
              {first && (
                <Box width="10rem">
                  <Text weight="bold" size="large">
                    Last Name
                  </Text>
                  {form.lastName}
                </Box>
              )}
            </Box>
            <Box gap="small" direction="row-responsive" justify="center">
              <Box width="10rem">
                <Text weight="bold" size="large">
                  Phone{" "}
                </Text>
                {form.phoneNumber}
              </Box>

              <Box width="10rem">
                <Text weight="bold" size="large">
                  Date & Time
                </Text>
                {new Date(form.bookedFor).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "numeric",
                  day: "numeric",
                }) +
                  " " +
                  new Date(form.bookedFor).toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
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
