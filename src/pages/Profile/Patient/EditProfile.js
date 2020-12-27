import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Form,
  FormField,
  MaskedInput,
  Text,
  TextInput,
  ResponsiveContext,
} from "grommet";
import { updatePatientDetails } from "../../../services/patients";
import { v4 as uuidv4 } from "uuid";

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

const emailMask = [
  {
    regexp: /^[\w\-_.]+$/,
    placeholder: "jane.smith",
  },
  { fixed: "@" },
  {
    regexp: /^[\w]+$/,
    placeholder: "hpe",
  },
  { fixed: "." },
  {
    regexp: /^[\w]+$/,
    placeholder: "com",
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

export const EditProfile = ({
  emailAddress,
  fullName,
  phoneNumber,
  setChange,
  _id,
  setMessage,
  patientId,
  sub,
}) => {
  const [formValues, setFormValues] = React.useState({
    emailAddress: emailAddress || "",
    fullName: fullName || "",
    phoneNumber: phoneNumber || "",
  });

  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const preliminaryValidation = !(
    formValues.fullName.length >= 3 &&
    new RegExp("^\\(?([0-9]{3})\\) ?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$").test(
      formValues.phoneNumber
    ) &&
    new RegExp("[^@ \\t\\r\\n]+@[^@ \\t\\r\\n]+\\.[^@ \\t\\r\\n]+").test(
      formValues.emailAddress
    )
  );
  const size = useContext(ResponsiveContext);

  const onChange = (values) => {
    setDisabled(false);
    setFormValues(values);
  };

  // eslint-disable-next-line no-unused-vars
  const onSubmit = ({ value, touched }) => {
    setOpen(false);
    updatePatientDetails({
      ...value,
      fullName: fullName || value.fullName,
      sub,
      id: _id || uuidv4(),
      patientId: patientId || uuidv4().substring(0, 8),
    }).then((res, error) => {
      setMessage("Your Profile has been updated");
      console.log(res);
      setChange();
    });
  };
  if (!open)
    return (
      <Button
        label="Edit Profile"
        primary
        onClick={() => {
          setOpen(true);
        }}
      />
    );
  return (
    <Box gap="medium" align="center" animation="slideDown">
      <Text size="xlarge" weight="normal" margin="small">
        Edit Profile
      </Text>

      <Box pad={{ horizontal: "xxsmall" }} fill>
        <Form
          validate="blur"
          value={formValues}
          onChange={(nextValue) => onChange(nextValue)}
          onSubmit={({ value, touched }) => onSubmit({ value, touched })}
        >
          {!fullName && (
            <FormField
              label="Full Name"
              htmlFor="fullName-input-persona"
              name="fullName"
              validate={(value) =>
                value.length < 3 && "Name must at least contain 3 letters "
              }
              required
            >
              <TextInput
                id="fullName-input-personal"
                name="fullName"
                placeholder="Jane Smith"
              />
            </FormField>
          )}

          <FormField
            label="Phone number"
            htmlFor="phoneNumber-input-personal"
            name="phoneNumber"
            validate={phoneNumberValidation}
            required
          >
            <MaskedInput
              placeholder="(xxx) xxx-xxxx"
              type="tel"
              mask={phoneMask}
              id="phoneNumber-input-personal"
              name="phoneNumber"
            />
          </FormField>
          <FormField
            required
            label="Email address"
            htmlFor="emailAddress-input-personal"
            name="emailAddress"
            validate={emailValidation}
          >
            <MaskedInput
              type="email"
              mask={emailMask}
              id="emailAddress-input-personal"
              name="emailAddress"
            />
          </FormField>

          <Box
            align={size !== "small" ? "start" : undefined}
            justify="center"
            margin={{ top: "medium", bottom: "small" }}
            direction="row"
            gap="small"
          >
            <Button label="Cancel" secondary onClick={() => setOpen(false)} />
            <Button
              label="Confirm"
              primary
              disabled={preliminaryValidation || disabled}
              type="submit"
            />
          </Box>
        </Form>
      </Box>
    </Box>
  );
};

export default EditProfile;
