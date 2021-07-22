import React from "react";
import { Box, CheckBoxGroup, FormField, MaskedInput, TextInput } from "grommet";
const emailValidation = [
  {
    regexp: new RegExp("[^@ \\t\\r\\n]+@"),
    message: "Enter a valid email address.",
    status: "error",
  },
  {
    regexp: new RegExp("[^@ \\t\\r\\n]+@[^@ \\t\\r\\n]+\\.[^@ \\t\\r\\n]+"),
    message: "Enter a valid email address.",
    status: "error",
  },
  {
    regexp: new RegExp("[^@ \\t\\r\\n]+@[^@ \\t\\r\\n]+\\.[^@ \\t\\r\\n]+"),
    message: "Enter a valid email address.",
    status: "error",
  },
];
const phoneNumberValidation = [
  {
    regexp: new RegExp("^\\(?([0-9]{3})\\) ?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$"),
    message: "Enter a valid phone number",
    status: "error",
  },
];

const phoneMask = [
  { fixed: "(" },
  {
    length: 3,
    regexp: /^[0-9]{1,3}$/,
    placeholder: "xxx",
  },
  { fixed: ")" },
  { fixed: " " },
  {
    length: 3,
    regexp: /^[0-9]{1,3}$/,
    placeholder: "xxx",
  },
  { fixed: "-" },
  {
    length: 4,
    regexp: /^[0-9]{1,4}$/,
    placeholder: "xxxx",
  },
];
const StepFour = () => {
  return (
    <Box animation={{ type: "fadeIn", duration: "1500" }}>
      <Box direction="row-responsive" gap="small" width="medium">
        <FormField
          required
          label="First name"
          htmlFor="firstName-input"
          name="firstName"
        >
          <TextInput placeholder="Jane" id="firstName-input" name="firstName" />
        </FormField>
        <FormField
          label="Last name"
          htmlFor="lastName-input"
          name="lastName"
          required
        >
          <TextInput placeholder="Smith" id="lastName-input" name="lastName" />
        </FormField>
      </Box>
      <FormField
        label="Phone number"
        htmlFor="phoneNumber-input"
        name="phoneNumber"
        validate={phoneNumberValidation}
        required
      >
        <MaskedInput
          placeholder="(xxx) xxx-xxxx"
          type="tel"
          mask={phoneMask}
          id="phoneNumber-input"
          name="phoneNumber"
        />
      </FormField>

      <FormField
        required
        label="Email address"
        htmlFor="emailAddress-input"
        name="emailAddress"
        validate={emailValidation}
      >
        <MaskedInput type="email" id="emailAddress-input" name="emailAddress" />
      </FormField>
      <Box>
        <FormField htmlFor="optionalCheckboxes">
          <CheckBoxGroup
            id="optionalCheckboxes"
            name="offers"
            options={["Sign me up for offers"]}
          />
        </FormField>
      </Box>
    </Box>
  );
};

export default StepFour;
