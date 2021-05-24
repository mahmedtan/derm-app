import { Anchor, Box, Text } from "grommet";
import React from "react";
import { useSelector } from "react-redux";
import Loading from "../../Extras/Loading";
import OfferCard from "../../../components/Utils/OfferCard";

const StepOne = () => {
  const [procedures, consultations] = useSelector(
    ({ procedures, consultations }) => [procedures, consultations]
  );

  if (!(procedures && consultations)) {
    return <Loading />;
  }
  const midConsults =
    consultations.length % 2 === 0
      ? consultations.length / 2
      : consultations.length / 2 + 1;
  const midProcedures =
    procedures.length % 2 === 0
      ? procedures.length / 2
      : procedures.length / 2 + 1;

  return (
    <Box
      align="center"
      gap="medium"
      animation="fadeIn"
      margin={{ bottom: "medium" }}
    >
      <Box direction="row" gap="small" border="between">
        <Box>
          <Anchor href="#consultjs" color="brand">
            Consults
          </Anchor>
        </Box>
        <Box>
          <Anchor href="#procedurejs" color="brand">
            Procedures
          </Anchor>
        </Box>
      </Box>

      <Box gap="large" direction="row-responsive" id="consultjs">
        <Box gap="large">
          {consultations.slice(0, midConsults).map((item) => (
            <OfferCard {...item} key={item._id} item={item} />
          ))}
        </Box>
        <Box gap="large">
          {consultations.slice(midConsults).map((item) => (
            <OfferCard {...item} key={item._id} item={item} />
          ))}
        </Box>
      </Box>
      <Text
        size="xxlarge"
        margin={{ top: "small", bottom: "small" }}
        id="procedurejs"
      >
        Procedures
      </Text>
      <Box gap="large" direction="row-responsive">
        <Box gap="large">
          {procedures.slice(0, midProcedures).map((item) => (
            <OfferCard {...item} key={item._id} item={item} />
          ))}
        </Box>
        <Box gap="large">
          {procedures.slice(midProcedures).map((item) => (
            <OfferCard {...item} key={item._id} item={item} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default StepOne;
