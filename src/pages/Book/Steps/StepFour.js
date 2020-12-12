import React, { useEffect, useState } from "react";
import { Box, Text, Button } from "grommet";
import { getAvailableDates, getAvailableTimes } from "../../../services/slots";
import Loading from "../../Extras/Loading";
import { useDispatch, useSelector } from "react-redux";
import { changeDate } from "../../../reducers/dateReducer";
import "react-datepicker/dist/react-datepicker.css";

import Datepicker from "react-datepicker";
const StepFour = () => {
  const dispatch = useDispatch();

  const date = useSelector(({ date }) => date);
  const [availableTimes, setAvailableTimes] = useState(null);
  const [dates, setDates] = useState(null);
  const [times, setTimes] = useState(null);

  useEffect(() => {
    getAvailableDates().then((dates) => setDates(dates));
    getAvailableTimes().then((times) => setTimes(times));
  }, []);

  useEffect(() => {
    if (times)
      setAvailableTimes(
        times.find((time) => time.dayOfTheWeek === new Date(date).getDay())
          .slots
      );
  }, [date]);

  if (!(dates && times)) return <Loading />;

  const filterDate = (current) => {
    return dates.find((item) => {
      return new Date(item).getDate() === new Date(current).getDate();
    });
  };
  const filterTime = (time) => {
    if (availableTimes)
      return (
        availableTimes.filter((item) => {
          return (
            Date.parse(`01/01/2011 ${time.toLocaleTimeString()}`) ===
            Date.parse(`01/01/2011 ${item}:00`)
          );
        }).length > 0
      );
  };
  // const setHours = (...args) => new Date().setHours(...args);
  // const setMinutes = (...args) => new Date().setMinutes(...args);

  return (
    <Box>
      <Datepicker
        id="datepicker"
        name="bookedDate"
        selected={date}
        onChange={(val) => dispatch(changeDate(val))}
        inline
        timeIntervals={15}
        showTimeSelect
        filterTime={filterTime}
        filterDate={filterDate}
      />
    </Box>
  );
};

export default StepFour;
