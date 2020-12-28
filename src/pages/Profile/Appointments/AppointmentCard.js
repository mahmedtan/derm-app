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
      elevation={open ? "large" : "small"}
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
            size={size === "small" ? "xlarge" : "xlarge"}
            weight="600"
            margin={{ horizontal: "2.3rem", vertical: "medium" }}
            textAlign={size === "small" ? "start" : "center"}
          >
            Booking for <br />
            {new Date(form.bookedFor).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </Text>

          <Box
            align={size === "small" ? "start" : "center"}
            animation="fadeIn"
            margin={{ left: size === "small" ? "2.3rem" : "none" }}
            width="large"
          >
            <Box align="center">
              <Box gap="medium">
                {first && (
                  <Box gap="medium" direction="row-responsive" justify="center">
                    <Box
                      width="11rem"
                      margin={{ left: size !== "small" ? "large" : "none" }}
                    >
                      <Box>
                        <Text weight="500" size="large">
                          First Name
                        </Text>
                        {form.firstName}
                      </Box>
                    </Box>

                    <Box width="11rem">
                      <Text weight="500" size="large">
                        Last Name
                      </Text>
                      {form.lastName}
                    </Box>
                  </Box>
                )}
                <Box gap="medium" direction="row-responsive" justify="center">
                  <Box
                    width="11rem"
                    align="start"
                    margin={{ left: size !== "small" ? "large" : "none" }}
                  >
                    <Box>
                      <Text weight="500" size="large">
                        Appointment ID
                      </Text>
                      {form.appointmentId}
                    </Box>
                  </Box>

                  <Box width="11rem">
                    <Text weight="500" size="large">
                      Date & Time
                    </Text>
                    {new Date(form.bookedFor).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    }) +
                      " " +
                      new Date(form.bookedFor).toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      })}
                  </Box>
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
