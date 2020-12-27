import {
  Box,
  Button,
  Form,
  FormField,
  Text,
  TextArea,
  TextInput,
} from "grommet";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { postAComment } from "../../services/comments";

const CommentForm = () => {
  const [formValues, setFormValues] = useState({
    patientName: "",
    remarks: "",
  });
  const uiTheme = useSelector(({ uiTheme }) => uiTheme);

  const [message, setMessage] = useState(null);
  return (
    <Box gap="small" fill="horizontal">
      <Text margin="none" size="xxlarge" textAlign="center">
        Leave a review!
      </Text>
      <Form
        value={formValues}
        onChange={(nextValue) => setFormValues(nextValue)}
        onSubmit={({ value }) => {
          postAComment(value).then((res) => {
            console.log("Comment Added", res);

            setMessage("Your response has been recorded!!!");

            setFormValues({
              patientName: "",
              remarks: "",
            });

            setTimeout(() => {
              setMessage(null);
            }, 5000);
          });
        }}
      >
        <Box gap="xxsmall">
          <FormField label="Name" htmlFor="fullName-input-contact">
            <TextInput
              style={{
                background: uiTheme === "light" ? "#FFFFFF" : "#404B5C",
              }}
              id="fullName-input-contact"
              placeholder="Jane Smith"
              name="patientName"
            />
          </FormField>
          <FormField label="Remarks" htmlFor="remarks-input-contact">
            <TextArea
              style={{
                background: uiTheme === "light" ? "#FFFFFF" : "#404B5C",
              }}
              id="remarks-input-contact"
              placeholder="Start writing here"
              name="remarks"
              rows="4"
            />
          </FormField>

          <Button
            primary
            fill="horizontal"
            label="Submit"
            color="brand-secondary"
            style={{ color: "black" }}
            type="submit"
            disabled={
              !(formValues.patientName.length > 2 && formValues.remarks.length)
            }
          />
        </Box>
      </Form>
      {message && (
        <Text size="large" weight="bold">
          {message}
        </Text>
      )}
    </Box>
  );
};

export default CommentForm;
