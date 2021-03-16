import {
  Box,
  Button,
  Form,
  FormField,
  Text,
  TextArea,
  TextInput,
} from "grommet";
import StarRatings from "react-star-ratings";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { postAComment } from "../../services/comments";

const CommentForm = () => {
  const [formValues, setFormValues] = useState({
    patientName: "",
    remarks: "",
  });
  const [rated, setRated] = useState(0);
  const uiTheme = useSelector(({ uiTheme }) => uiTheme);

  const [message, setMessage] = useState(null);
  return (
    <Box gap="small" fill="horizontal">
      <Text margin="none" size="xxlarge" textAlign="center">
        Leave A Review
      </Text>
      <Form
        value={formValues}
        onChange={(nextValue) => setFormValues(nextValue)}
        onSubmit={({ value }) => {
          postAComment({ ...value, rated }).then((res) => {
            console.log("Comment Added", res);

            setMessage("Your response has been recorded!");

            setFormValues({
              patientName: "",
              remarks: "",
            });
            setRated(0);

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
          <Box align="center" margin="small">
            <StarRatings
              numberOfStars={5}
              starRatedColor="#694F5D"
              starHoverColor="#8f6b7e"
              starDimension="30px"
              rating={rated}
              changeRating={(nRating) => setRated(nRating)}
            />
          </Box>

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
        <Text size="large" weight="bold" textAlign="center">
          {message}
        </Text>
      )}
    </Box>
  );
};

export default CommentForm;
