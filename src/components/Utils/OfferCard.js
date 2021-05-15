import {
  Card,
  Box,
  Text,
  Paragraph,
  ResponsiveContext,
  CheckBox,
} from "grommet";
import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const OfferCard = ({
  title,
  startingPrice,
  endingPrice,
  time,
  description,
  _id,
  type,
  item,
}) => {
  const formValues = useSelector(({ formValues }) => formValues);
  const [selected, setSelected] = useState(false);
  const size = useContext(ResponsiveContext);
  useEffect(() => {
    setSelected(
      Object.keys(formValues)
        .filter((x) => formValues[x])
        .indexOf(_id) >= 0
    );
  }, [formValues, _id]);

  return (
    <Card
      pad={size === "small" ? "large" : "medium"}
      justify="center"
      border={selected && { color: "#8E677A", size: "small" }}
      elevation={selected ? "xlarge" : "large"}
      round={size === "small" ? "medium" : "small"}
    >
      <Box direction="row" justify="between">
        <Box basis="3/4">
          <Text size="large" truncate>
            {title}
          </Text>
        </Box>

        <Text>
          <em>{`${time} min`}</em>
        </Text>
      </Box>

      <Box height="8rem" overflow="hidden">
        <Paragraph>{description}</Paragraph>
      </Box>

      <Box direction="row" align="center" justify="between">
        <Text weight="bold">{`$${startingPrice} ${
          endingPrice ? `- $${endingPrice}` : ""
        }`}</Text>

        <CheckBox id={_id} name={_id} type={type} />
      </Box>
    </Card>
  );
};

export default OfferCard;
