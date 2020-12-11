import React, { useContext } from "react";
import { FormPrevious } from "grommet-icons";
import { Link } from "react-router-dom";
import Steps from "./Steps/Steps";

import { Box, Heading, Button, Text, ResponsiveContext } from "grommet";

import { decrementIndex } from "../../reducers/indexReducer";
import { useDispatch, useSelector } from "react-redux";

const StepHeader = () => {
  const dispatch = useDispatch();
  const size = useContext(ResponsiveContext);
  const activeIndex = useSelector(({ activeIndex }) => activeIndex);

  return (
    <Box
      direction="row"
      fill="horizontal"
      align="center"
      justify={size === "small" ? "center" : "between"}
    >
      {size !== "small" &&
        (activeIndex !== 0 ? (
          <Button
            icon={<FormPrevious />}
            label="Back"
            onClick={() => dispatch(decrementIndex())}
          />
        ) : (
          <Link to="/services">
            <Button
              icon={<FormPrevious />}
              size="small"
              label="Back to Services"
            />
          </Link>
        ))}
      <Text textAlign="center" weight="normal">{`Step ${activeIndex + 1} of ${
        Steps.length
      }`}</Text>
    </Box>
  );
};

export default StepHeader;
