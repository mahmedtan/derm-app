import React from "react";
import { Box, FormField, TextArea, TextInput } from "grommet";
import Dropzone from "../../../components/Utils/Dropzone";

const StepThree = () => {
  return (
    <Box gap="medium">
      <Box animation="fadeIn" round="xsmall" border="all" width="medium">
        <Dropzone />
      </Box>
      <FormField label="Additional notes" htmlFor="remarks">
        <TextArea id="remarks" name="remarks" rows="5" />
      </FormField>
    </Box>
  );
};

export default StepThree;
