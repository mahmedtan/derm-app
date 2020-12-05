import {
  Box,
  Heading,
  Form,
  FormField,
  TextInput,
  Button,
  TextArea,
} from "grommet";
import React from "react";
import Footer from "../Footer/Footer";

const CommentForm = () => {
  const [value, setValue] = React.useState({});

  return (
    <Box fill align="center">
      <Heading textAlign="center" level="3">
        Leave a review
      </Heading>
      <Box height="large" width="full" background="blue">
        renfnfne
      </Box>
      <Footer />
    </Box>
  );
};

export default CommentForm;
