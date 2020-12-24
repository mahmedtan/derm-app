import {
  Box,
  Button,
  Form,
  FormField,
  Heading,
  Text,
  Card,
  TextArea,
  TextInput,
  Stack,
} from "grommet";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { postAComment } from "../../services/comments";

import Background from "./background.png";

const CommentForm = () => {
  const [formValues, setFormValues] = useState({
    patientName: "",
    remarks: "",
  });
  const uiTheme = useSelector(({ uiTheme }) => uiTheme);

  const [message, setMessage] = useState(null);
  return (
    <Card
      gap="small"
      pad="medium"
      width="large"
      background={`url(${Background})`}
      animation="slideDown"
    >
      <Heading margin="none" level="3" textAlign="center">
        Leave a review!
      </Heading>
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
        <FormField label="Full name" htmlFor="fullName-input-contact">
          <TextInput
            style={{ background: uiTheme === "light" ? "#FFFFFF" : "#404B5C" }}
            id="fullName-input-contact"
            placeholder="Jane Smith"
            name="patientName"
          />
        </FormField>
        <FormField label="Remarks" htmlFor="remarks-input-contact">
          <TextArea
            style={{ background: uiTheme === "light" ? "#FFFFFF" : "#404B5C" }}
            id="remarks-input-contact"
            placeholder="Start writing here"
            name="remarks"
            rows="4"
          />
        </FormField>

        <Button
          primary
          label="Submit"
          fill
          color="brand-tertiary"
          style={{ color: "black" }}
          type="submit"
          disabled={
            !(formValues.patientName.length > 2 && formValues.remarks.length)
          }
        />
      </Form>
      {message && (
        <Text size="large" weight="bold">
          {message}
        </Text>
      )}
    </Card>
  );
};

export default CommentForm;
