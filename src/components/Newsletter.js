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

const Newsletter = () => {
  const [value, setValue] = useState({});
  const size = useContext(ResponsiveContext);

  return (
    <Box
      fill="horizontal"
      direction="row-responsive"
      justify="center"
      align="center"
      pad={size === "small" ? "large" : "none"}
      gap="large"
    >
      <Heading level={3}>Get the news delivered to your inbox!</Heading>

      <Form value={value} onChange={(nextValue) => setValue(nextValue)}>
        <Box direction="row-responsive" align="center" gap="large">
          <Box direction="row-responsive" align="center" gap="small">
            <Text weight="bold">Name:</Text>
            <TextInput
              id="user-name"
              reverse
              placeholder="John Doe"
              icon={<User />}
            />
          </Box>

          <Box direction="row-responsive" align="center" gap="small">
            <Text weight="bold">Email:</Text>
            <TextInput
              id="email"
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
