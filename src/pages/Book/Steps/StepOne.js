import { Box, Text, Heading } from "grommet";
import React from "react";
import { useSelector } from "react-redux";
import Loading from "../../Extras/Loading";
import OfferCard from "../../../components/Utils/OfferCard";

const StepOne = () => {
  const [
    procedures,
    consultations,
  ] = useSelector(({ procedures, consultations }) => [
    procedures,
    consultations,
  ]);

  if (!(procedures && consultations)) {
    return <Loading />;
  }

  return (
    <Box align="center" gap="medium" animation="fadeIn">
      <Text size="xlarge">Consultations</Text>
      <Box gap="large" direction="row-responsive">
        <Box gap="large">
          {consultations.slice(0, consultations.length / 2 + 1).map((item) => (
            <OfferCard {...item} key={item._id} item={item} />
          ))}
        </Box>
        <Box gap="large">
          {consultations.slice(consultations.length / 2 + 1).map((item) => (
            <OfferCard {...item} key={item._id} item={item} />
          ))}
        </Box>
      </Box>
      <Text size="xlarge">Procedures</Text>
      <Box gap="large" direction="row-responsive">
        <Box gap="large">
          {procedures.slice(0, procedures.length / 2 + 1).map((item) => (
            <OfferCard {...item} key={item._id} item={item} />
          ))}
        </Box>
        <Box gap="large">
          {procedures.slice(procedures.length / 2 + 1).map((item) => (
            <OfferCard {...item} key={item._id} item={item} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default StepOne;
