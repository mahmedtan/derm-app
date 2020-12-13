import { Box, Heading, Form, Text, ResponsiveContext } from "grommet";
import React, { useContext, useEffect, useRef } from "react";
import StepFooter from "./StepFooter";
import { useHistory } from "react-router-dom";
import Steps from "./Steps/Steps";
import { useDispatch, useSelector } from "react-redux";
import StepHeader from "./StepHeader";

import Loading from "../Extras/Loading";
import { changeValues } from "../../reducers/formValuesReducer";

const Book = () => {
  const size = useContext(ResponsiveContext);
  const dispatch = useDispatch();
  const history = useHistory();

  const { activeIndex, procedures, consultations, formValues } = useSelector(
    ({ procedures, consultations, activeIndex, formValues }) => ({
      activeIndex,
      formValues,
      procedures,
      consultations,
    })
  );

  if (!(procedures && consultations)) {
    return <Loading />;
  }

  return (
    <Box align="center" height={{ min: "100vh" }}>
      <Box
        align="center"
        width="large"
        pad={size === "small" ? "large" : "medium"}
        gap="medium"
      >
        <Box gap="small" fill>
          <StepHeader />
          <Heading margin={{ vertical: "none" }} level="2" textAlign="center">
            {Steps[activeIndex].title}
          </Heading>
          <Text textAlign="center">{Steps[activeIndex].description}</Text>
        </Box>

        <Box>
          <Form
            validate="blur"
            value={formValues}
            onChange={(nextValue) => dispatch(changeValues(nextValue))}
            onSubmit={({ value }) => {
              history.push("/processing");
            }}
          >
            <Box gap="medium">
              {Steps[activeIndex].item}
              <StepFooter />
            </Box>
          </Form>
        </Box>
      </Box>
    </Box>
  );
};

export default Book;
