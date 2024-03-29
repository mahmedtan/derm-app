import React from "react";
import { Box, FormField, Text, TextArea } from "grommet";
import Dropzone from "../../../components/Utils/Dropzone";

const StepTwo = () => {
  return (
    <Box gap="medium" animation={{ type: "fadeIn", duration: "1500" }}>
      <Box animation="fadeIn" round="xsmall" border="all" width="medium">
        <Dropzone />
      </Box>
      <FormField label={<Text size="large">Remarks</Text>} htmlFor="remarks">
        <TextArea id="remarks" name="remarks" rows="5" />
      </FormField>
    </Box>
  );
};

export default StepTwo;
