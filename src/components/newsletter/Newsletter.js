import {
  Box,
  Button,
  Form,
  FormField,
  Heading,
  TextInput,
  Card,
} from "grommet";
import { useState } from "react";
import { MailOption, User } from "grommet-icons";

const Newsletter = () => {
  const [value, setValue] = useState({});

  return (
    <Box
      elevation="small"
      round="medium"
      background="brand"
      direction="row-responsive"
      justify="around"
      overflow="hidden"
      width="large"
    >
      <Box pad="large" align="center" alignContent="center" elevation="large">
        <Heading level={2}>Get the news delivered to your inbox!</Heading>
      </Box>
      <Card
        pad="medium"
        background="background-front"
        round="none"
        elevation="none"
      >
        <Form value={value} onChange={(nextValue) => setValue(nextValue)}>
          <Box pad="small" width="large">
            <FormField name="name" htmlFor="user-name" label="Full Name:">
              <TextInput
                id="user-name"
                reverse
                placeholder="John Doe"
                icon={<User />}
              />
            </FormField>
            <FormField name="name" htmlFor="email" label="Email Address:">
              <TextInput
                id="email"
                reverse
                placeholder="john@example.com"
                icon={<MailOption />}
              />
            </FormField>
            <Button
              type="submit"
              label="Subscribe"
              margin={{ top: "medium" }}
              primary
            />
          </Box>
        </Form>
      </Card>
    </Box>
  );
};

export default Newsletter;
