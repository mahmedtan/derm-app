import { Button, Box } from "grommet";
import Steps from "./Steps/Steps";
import React from "react";
import { incrementIndex } from "../../reducers/indexReducer";
import { useDispatch, useSelector } from "react-redux";

const StepFooter = () => {
  const activeIndex = useSelector(({ activeIndex }) => activeIndex);
  const { formValues, date } = useSelector(({ formValues, date }) => ({
    formValues,
    date,
  }));

  const { firstName, lastName, emailAddress, phoneNumber } = formValues;

  const stepOneValidation =
    !Object.keys(formValues)
      .filter((x) => formValues[x])
      .filter((x) => x.length > 15).length > 0;

  const phoneNumberVal = new RegExp(
    "^\\(?([0-9]{3})\\) ?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$"
  ).test(phoneNumber);

  const stepFourValidation =
    activeIndex === 3 &&
    !(firstName && lastName && emailAddress && phoneNumber && phoneNumberVal);

  const stepThreeValidation =
    activeIndex === 2 && !(date && new Date(date).getHours());

  const dispatch = useDispatch();
  return (
    <Box align="center">
      <Box align="center" width="20rem" justify="center">
        {activeIndex === Steps.length - 1 ? (
          <Button
            primary
            label="Confirm Submission"
            disabled={stepFourValidation}
            size="large"
            fill
            type="submit"
          />
        ) : (
          <Button
            primary
            disabled={stepOneValidation || stepThreeValidation}
            label="Next"
            fill
            onClick={(e) => {
              e.preventDefault();
              dispatch(incrementIndex());
            }}
          />
        )}
      </Box>
    </Box>
  );
};

export default StepFooter;
