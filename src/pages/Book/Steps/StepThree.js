import React, { useEffect, useState } from "react";
import { Box, Card } from "grommet";
import { getAvailableTimes } from "../../../services/slots";
import Loading from "../../Extras/Loading";
import { useDispatch, useSelector } from "react-redux";
import { changeDate } from "../../../reducers/dateReducer";
import "react-datepicker/dist/react-datepicker.css";
import Datepicker from "react-datepicker";

const StepThree = () => {
  const dispatch = useDispatch();

  const date = useSelector(({ date }) => date);
  const [availableTimes, setAvailableTimes] = useState(null);
  const [times, setTimes] = useState(null);

  useEffect(() => {
    getAvailableTimes().then((times) => setTimes(times));
  }, []);

  useEffect(() => {
    if (times && date)
      setAvailableTimes(
        times.find((time) => time.dayOfTheWeek === new Date(date).getDay())
          .slots
      );
  }, [date, times]);

  if (!times) return <Loading />;

  const filterDate = (current) => {
    const day = new Date(current).getDay();

    return times.find(
      (item) =>
        item.dayOfTheWeek === day &&
        item.available &&
        new Date(current).getTime() >= new Date().getTime()
    );
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

  return (
    <Box align="center" margin="small">
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
        calendarContainer={Container}
        timeClassName={(time) =>
          (time.getHours() < 9 || time.getHours() > 18 || !filterTime(time)) &&
          "text-hide"
        }
      />
    </Box>
  );
};

const Container = ({ children, className }) => {
  return (
    <Box pad="xsmall" width="21rem" align="center">
      <Card direction="row" className={className} background="light-1">
        {children}
      </Card>
    </Box>
  );
};

export default StepThree;
