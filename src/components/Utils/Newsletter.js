import {
  Box,
  Button,
  Form,
  FormField,
  Heading,
  TextInput,
  Card,
  Text,
  ResponsiveContext,
} from "grommet";
import { useContext, useState } from "react";
import { MailOption, User } from "grommet-icons";
import Axios from "axios";
const Newsletter = () => {
  const [value, setValue] = useState({
    fullName: "",
    emailAddress: "",
  });
  const size = useContext(ResponsiveContext);

  return (
    <Box
      fill="horizontal"
      direction="row-responsive"
      justify="center"
      align="center"
      gap="large"
      pad={size === "small" ? "large" : "medium"}
    >
      <Text textAlign="center" size="xlarge">
        Get the news delivered to your inbox!
      </Text>

      <Form
        value={value}
        onChange={(nextValue) => setValue(nextValue)}
        onSubmit={({ value }) => {
          if (value.fullName && value.emailAddress)
            Axios.post("/api/newsletter", value).then((res) => {
              console.log("Name Added", res);
              setValue({
                fullName: "",
                emailAddress: "",
              });
            });
        }}
      >
        <Box direction="row-responsive" align="center" gap="large">
          <Box direction="row-responsive" align="center" gap="small">
            <Text>Full Name:</Text>
            <Box>
              <TextInput
                id="first-name"
                name="fullName"
                reverse
                placeholder="John Doe"
                icon={<User />}
              />
            </Box>
          </Box>

          <Box direction="row-responsive" align="center" gap="small">
            <Text>Email:</Text>
            <TextInput
              id="email"
              name="emailAddress"
              reverse
              placeholder="john@example.com"
              icon={<MailOption />}
            />
          </Box>

          <Button type="submit" label="Subscribe" color="pink" primary />
        </Box>
      </Form>
    </Box>
  );
};

export default Newsletter;
