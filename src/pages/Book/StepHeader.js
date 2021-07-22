import React, { useContext } from "react";
import { FormPrevious } from "grommet-icons";
import { Link, useHistory } from "react-router-dom";
import Steps from "./Steps/Steps";

import { Box, Button, Text, ResponsiveContext } from "grommet";

import { decrementIndex } from "../../reducers/indexReducer";
import { useDispatch, useSelector } from "react-redux";
import ProgressBarSteps from "./ProgressBarSteps";

const StepHeader = () => {
  const dispatch = useDispatch();
  const size = useContext(ResponsiveContext);
  const history = useHistory();
  const activeIndex = useSelector(({ activeIndex }) => activeIndex);

  return (
    <Box
      gap="large"
      align="start"
      justify="center"
      direction="column-reverse"
      margin={{ vertical: size == "small" ? "medium" : "none" }}
    >
      <Box fill align="center">
        {size === "small" &&
          (activeIndex !== 0 ? (
            <Button
              label="Back"
              onClick={() => dispatch(decrementIndex())}
              style={{ boxShadow: "2px 2px 10px -5px black" }}
            />
          ) : (
            <Link to="/services">
              <Button
                style={{ boxShadow: "2px 2px 10px -7px black" }}
                size="small"
                label="Back to Services"
              />
            </Link>
          ))}
      </Box>

      <Box
        direction="row"
        fill="horizontal"
        gap="large"
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
            <Button
              icon={<FormPrevious />}
              label="Exit"
              onClick={() => history.goBack()}
            />
          ))}

        <ProgressBarSteps total={Steps} active={activeIndex + 1} />
      </Box>
    </Box>
  );
};

export default StepHeader;
