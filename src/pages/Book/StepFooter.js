import { Button, Box } from "grommet";
import Steps from "./Steps/Steps";
import React from "react";
import { incrementIndex } from "../../reducers/indexReducer";
import { useDispatch, useSelector } from "react-redux";

const StepFooter = () => {
  const activeIndex = useSelector(({ activeIndex }) => activeIndex);

  const dispatch = useDispatch();
  return (
    <Box fill="horizontal" direction="row" gap="large" justify="end">
      {activeIndex === Steps.length - 1 ? (
        <Button primary label="Confirm Submission" size="large" type="submit" />
      ) : (
        <Button
          primary
          size="large"
          label="Next"
          onClick={(e) => {
            e.preventDefault();
            dispatch(incrementIndex());
          }}
        />
      )}
    </Box>
  );
};

export default StepFooter;
