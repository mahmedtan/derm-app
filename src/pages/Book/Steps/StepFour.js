import React, { useEffect, useState } from "react";
import { Box, FormField } from "grommet";
import Datetime from "react-datetime";
import { getAvailableSlots } from "../../../services/slots";
import Loading from "../../Extras/Loading";
import { useDispatch, useSelector } from "react-redux";
import { changeDate } from "../../../reducers/dateReducer";

const StepFour = () => {
  const dispatch = useDispatch();

  const date = useSelector(({ date }) => date);
  const [slots, setSlots] = useState(null);
  useEffect(() => getAvailableSlots().then((slots) => setSlots(slots)), []);

  if (!slots) return <Loading />;
  const validate = (current) => {
    return slots.filter((item) => item.date() === current.date()).length > 0;
  };

  return (
    <Box elevation="large" width="medium">
      <Datetime
        id="datepicker"
        name="bookedDate"
        value={date}
        onChange={(val) => dispatch(changeDate(val))}
        isValidDate={validate}
        open={true}
        input={false}
        timeConstraints={{
          hours: { min: 9, max: 17, step: 1 },
          minutes: { step: 15 },
        }}
      />
    </Box>
  );
};

export default StepFour;
