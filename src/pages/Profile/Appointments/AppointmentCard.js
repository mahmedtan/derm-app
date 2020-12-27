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
        <Box>
          <Text
            size={size === "small" ? "large" : "xlarge"}
            margin="medium"
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
            animation="fadeIn"
            width="large"
          >
            <Box gap="medium" pad={{ horizontal: "xlarge" }}>
              {first && (
                <Box gap="medium" direction="row-responsive" justify="center">
                  <Box width="11rem">
                    <Text weight="bold" size="large">
                      First Name
                    </Text>
                    {form.firstName}
                  </Box>

                  <Box width="11rem">
                    <Text weight="bold" size="large">
                      Last Name
                    </Text>
                    {form.lastName}
                  </Box>
                </Box>
              )}
              <Box gap="medium" direction="row-responsive" justify="center">
                <Box width="11rem">
                  <Text weight="bold" size="large">
                    Appointment ID
                  </Text>
                  {form.appointmentId}
                </Box>

                <Box width="11rem">
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
