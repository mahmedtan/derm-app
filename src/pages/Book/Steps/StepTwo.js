import React from "react";
import { Box, CheckBoxGroup, FormField, TextInput } from "grommet";

const StepTwo = () => {
  return (
    <Box animation="fadeIn">
      <Box direction="row-responsive" gap="small" width="medium">
        <FormField
          label="First name"
          htmlFor="firstName-input"
          name="firstName"
        >
          <TextInput placeholder="Jane" id="firstName-input" name="firstName" />
        </FormField>
        <FormField label="Last name" htmlFor="lastName-input" name="lastName">
          <TextInput placeholder="Smith" id="lastName-input" name="lastName" />
        </FormField>
      </Box>
      <FormField
        label="Phone number"
        htmlFor="phoneNumber-input"
        name="phoneNumber"
      >
        <TextInput
          placeholder="xxx-xxx-xxxx"
          type="tel"
          id="phoneNumber-input"
          name="phoneNumber"
        />
      </FormField>
      <FormField
        label="Email address"
        htmlFor="emailAddress-input"
        name="emailAddress"
      >
        <TextInput
          placeholder="johndoe@example.com"
          type="email"
          id="emailAddress-input"
          name="emailAddress"
        />
      </FormField>
      <Box>
        <FormField htmlFor="optionalCheckboxes">
          <CheckBoxGroup
            id="optionalCheckboxes"
            name="offers"
            options={[
              "Would you like to receive text messages",
              "Sign me up for offers",
            ]}
          />
        </FormField>
      </Box>
    </Box>
  );
};

export default StepTwo;
