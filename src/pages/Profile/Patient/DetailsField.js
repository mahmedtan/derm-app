import { Box, ResponsiveContext, Text } from "grommet";
import { useContext } from "react";

const DetailsField = ({ fieldName, fieldValue }) => {
  const size = useContext(ResponsiveContext);
  return (
    <Box
      direction="row-responsive"
      align="center"
      justify="between"
      gap={size === "small" ? "medium" : "large"}
    >
      <Text size="large" weight="bold">
        {fieldName}:
      </Text>
      <Text size="large">{fieldValue}</Text>
    </Box>
  );
};

export default DetailsField;
